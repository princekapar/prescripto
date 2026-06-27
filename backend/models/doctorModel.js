import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema(
  {
    name: {type: String,require: true,},
    email: { type: String, require: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
        available: { type: Boolean, default:true },
    fees: { type: Object, require: true },
    address: {
    line1: String,
    line2: String
  },
    date: { type: Number, require: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false },
);

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);


export default doctorModel;