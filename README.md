# 🏥 Prescripto - Doctor Appointment Booking System

A full-stack Doctor Appointment Booking System built using the MERN Stack. The platform allows patients to book appointments with doctors, doctors to manage their schedules, and administrators to oversee the entire system through a dedicated dashboard.

🌐 **Live Demo:** [Prescripto Live](https://prescripto-frontend-a9bm.onrender.com/)
---

## 📸 Preview

| Home Page | Find Doctors |
|-----------|--------------|
| ![Home](https://github.com/user-attachments/assets/35e46a87-e8de-43b2-b841-b18a84155d1c) | ![Doctors](https://github.com/user-attachments/assets/3d1fb35e-e231-49c3-9a44-9d96810e0921) |

| Book Appointment | My Appointments |
|------------------|-----------------|
| ![Appointment](https://github.com/user-attachments/assets/43f44781-421f-4173-89e3-6372030e3d9d) | ![My Appointments](https://github.com/user-attachments/assets/43f44781-421f-4173-89e3-6372030e3d9d) |

| Doctor Dashboard | Admin Dashboard |
|------------------|-----------------|
| ![Doctor](https://github.com/user-attachments/assets/dd833b4c-6bd0-4a51-b87f-1cb48fa033ca) | ![Admin](https://github.com/user-attachments/assets/fd7eafcb-c8d4-42ac-a422-e5bbec9343ca) |

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
git clone https://github.com/princekapar/prescripto.git
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
cd admin
npm run dev
```
