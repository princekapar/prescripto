import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import Razorpay from "razorpay";

// API to register user

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    // check if user already exists ✅ (MOVE HERE)
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // validate password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for user login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    console.log(email);
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentails" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get the user profile data

const getProfile = async (req, res) => {
  try {
    const userId = req.user;

    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, data: userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to update the user profile data

const updateProfile = async (req, res) => {
  try {
    const userId = req.user;
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Missing details" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      //upload image to cloudinary and get the url
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to book an appointment with doctor

const bookAppointment = async (req, res) => {
  try {
    const { docId, slotDate, slotTime } = req.body;
    const userId = req.user;

    const docData = await doctorModel.findById(docId).select("-password");

    if (!docData.available) {
      return res.json({
        success: false,
        message: "Doctor is not available for booking",
      });
    }

    let slots_Booked = docData.slots_booked || {};

    // checking for slot availability

    if (slots_Booked[slotDate]) {
      if (slots_Booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot not available" });
      } else {
        slots_Booked[slotDate].push(slotTime);
      }
    } else {
      slots_Booked[slotDate] = [];
      slots_Booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");

    delete docData.slots_booked;

    const appointmentData = {
      userId,
      docId,
      slotDate,
      slotTime,
      userData,
      docData,
      amount: docData.fees,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // save new slots data in doctor collection

    await doctorModel.findByIdAndUpdate(docId, { slots_booked: slots_Booked });

    res.json({ success: true, message: "Appointment booked successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get the user appointments for frontend my appointments page

const listAppointments = async (req, res) => {
  try {
    const userId = req.user;

    const appointments = await appointmentModel.find({ userId });

    res.json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API to Cancel the appointment can be done by user

const cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const userId = req.user;

    const appointmentData = await appointmentModel.findById(appointmentId);

    //varfiy appointment belongs to the user

    if (appointmentData.userId !== userId) {
      return res.json({
        success: false,
        message: "You are not authorized to cancel this appointment",
      });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    // remove the slot from doctor's booked slots
    // releasing doctor slots

    const { docId, slotDate, slotTime } = appointmentData;

    const doctorData = await doctorModel.findById(docId);

    let slots_Booked = doctorData.slots_booked;

    slots_Booked[slotDate] = slots_Booked[slotDate].filter(
      (time) => time !== slotTime,
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked: slots_Booked });

    res.json({
      success: true,
      message: "Appointment cancelled successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// APi to make payment for the appointment can be done by user with razorpay

const paymentRazorpay = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData || appointmentData.cancelled) {
      return res.json({
        success: false,
        message: "Appointment Cancelled or does not exist",
      });
    }

    //creating option for razorpay

    const options = {
      amount: appointmentData.amount * 100, // amount in paise
      currency: process.env.CURRENCY,
      receipt: appointmentId,
    };

    //creating order for razorpay

    const order = await razorpayInstance.orders.create(options);

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};


// API to verify the payment of razorpay can be done by user with razorpay

const verifyPayment = async (req, res) => { 
  try {

    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
   

    if (orderInfo.status === "paid") { 
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      res.json({
        success: true,
        message: "Payment successful",
      })
    }else {
        res.json({
          success: false,
          message: "Payment failed",
        })
      }

  
    
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointments,
  cancelAppointment,
  paymentRazorpay,
  verifyPayment,
};
