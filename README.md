# 🏥 Prescripto - Doctor Appointment Booking System

A full-stack Doctor Appointment Booking System built using the MERN Stack. The platform allows patients to book appointments with doctors, doctors to manage their schedules, and administrators to oversee the entire system through a dedicated dashboard.

---

## 🚀 Features

### 👤 User
- User Registration & Login (JWT Authentication)
- Browse Doctors by Specialty
- View Doctor Profiles
- Book Appointments
- Cancel Appointments
- View Appointment History
- Secure Online Payment (Razorpay)
- Responsive UI

### 👨‍⚕️ Doctor
- Secure Doctor Login
- Dashboard Overview
- View Upcoming Appointments
- Accept/Complete Appointments
- Update Doctor Profile
- Manage Availability

### 👨‍💼 Admin
- Secure Admin Login
- Dashboard Analytics
- Manage Doctors
- Manage Users
- View All Appointments
- Update Doctor Availability
- Monitor Platform Activities

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Multer
- Cloudinary

## Payment
- Razorpay Integration

## Deployment
- Vercel (Frontend)
- Render / Railway (Backend)
- MongoDB Atlas (Database)

---

# 📂 Project Structure

```
Prescripto/
│
├── frontend/          # Patient Website
├── admin/             # Admin Dashboard
├── backend/           # REST API & Database
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/prescripto.git
```

```bash
cd prescripto
```

---

## 2. Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Admin

```bash
cd ../admin
npm install
```

### Backend

```bash
cd ../backend
npm install
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
PORT=4000

MONGODB_URI=

JWT_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

CURRENCY=INR
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
```

---

## Admin (.env)

```env
VITE_BACKEND_URL=
```

---

# ▶️ Running the Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin

```bash