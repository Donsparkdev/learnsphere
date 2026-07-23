LearnSphere 🎓

A modern full-stack Learning Management System (LMS) built with React, Node.js, Express, and MongoDB.

LearnSphere allows users to create accounts, browse courses, watch lessons, track learning progress, take quizzes, and earn certificates.

🚀 Features

Authentication

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control

Courses

- Create courses
- Browse courses
- Update and delete courses
- Instructor management

Lessons

- Add lessons to courses
- Lesson ordering
- Video lesson support
- Downloadable resources

Future Features

- Video uploads with Cloudinary
- Student enrollment
- Progress tracking
- Quiz system
- Certificates
- Reviews and ratings
- PWA offline learning
- AI learning assistant

🛠 Tech Stack

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

Frontend (Coming Soon)

- React
- Vite
- Tailwind CSS
- TanStack Query
- PWA

Services

- MongoDB Atlas
- Cloudinary
- Redis (planned)

📂 Project Structure

learnsphere/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── client/
│
├── README.md
├── LICENSE
├── .gitignore
└── .env.example

⚙️ Installation

Clone the repository:

git clone https://github.com/Donsparkdev/learnsphere.git

Install backend dependencies:

cd backend
npm install

Create your environment file:

cp .env.example .env

Start development server:

npm run dev

🔐 Environment Variables

See ".env.example" for required variables.

📌 API Documentation

API documentation will be added as development continues.

🤝 Contribution

Contributions, issues, and feature requests are welcome.

📄 License

This project is licensed under the MIT License.

