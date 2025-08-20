# Weight Tracking Web Application (MERN Stack)

A full-stack weight tracking application that allows users to securely sign up, log in, and manage personal weight records. Track your progress with interactive graphs and gain insights on your weight trends.

## Features
- User Authentication: Secure signup/login with JWT.
- Add & Manage Weight: Log daily weight entries easily.
- Data Visualization: Interactive 2D graphs for:
  - Past Week
  - Past Month
  - Custom Date Range
- Insights: Average, min/max, and weight change trends over selected periods.
- Responsive UI: Clean and user-friendly interface built with React & Tailwind CSS.

## Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Project Structure

Track-your-weight/
├── client/ # Frontend code
│ ├── node_modules/
│ ├── public/ # Public assets
│ ├── src/
│ │ ├── assets/ # Images and static files
│ │ │ └── react.svg
│ │ ├── components/ # Reusable React components
│ │ │ ├── Navbar.jsx
│ │ │ └── WeightChart.jsx
│ │ ├── pages/ # Page components
│ │ │ ├── AddWeight.jsx
│ │ │ ├── CustomVisualize.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── VisualizeMonth.jsx
│ │ │ └── VisualizeWeek.jsx
│ │ ├── App.css # Global styles
│ │ ├── App.jsx # Root component
│ │ └── main.jsx # Entry point
│ ├── package.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ └── vite.config.js
├── server/ # Backend code
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── controller/
│ │ ├── authController.js
│ │ └── weightController.js
│ ├── middleware/ # Auth middleware
│ ├── model/
│ │ ├── user.js
│ │ └── weight.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── weightRoutes.js
│ ├── server.js # Backend entry point
│ ├── package.json
│ └── vercel.json
├── .gitignore
└── README.md
