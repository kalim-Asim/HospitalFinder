# Hospital Finder 🏥
Project made by our group in Software Engineering course
[![Repository](https://img.shields.io/badge/GitHub-HospitalFinder-blue?style=flat-square)](https://github.com/kalim-Asim/HospitalFinder)

Hospital Finder is a web application that helps users locate hospitals, book appointments, schedule lab tests, and receive timely notifications and reminders, all from one convenient platform.

## 🌟 Features

- **Authentication**: Secure user registration and login system.
- **Interactive Maps**: Find nearby hospitals with an integrated map feature.
- **Appointment Booking**: Schedule doctor consultations effortlessly.
- **Lab Test Booking**: Reserve lab tests at your convenience.
- **Notifications & Reminders**: Receive alerts and reminders for upcoming appointments or tests.

## 🔧 Technologies Used

- **Backend**: Node.js with Express.js
- **Frontend**: Handlebars and CSS
- **Database**: MongoDB
- **Maps Integration**: (Specify the service used, e.g., Google Maps API)
## 🗂 Neccessary Id to run
- **Admin**: - email: admin123@gmail.com
             - password: admin123
- **User**: - create your id for login then use it
  
## 🗂 Project Structure

```plaintext
HospitalFinder/
├── public/              # Static assets (CSS, JS, images)
├── routes/              # Application routes
├── views/               # Handlebars templates
├── models/              # MongoDB schemas
├── controllers/         # Logic for routes
├── app.js               # Main application entry point
└── package.json         # Dependencies and project metadata
## 📦 Installation

### Step 1: Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/kalim-Asim/HospitalFinder.git
cd HospitalFinder

Step 2: Install Dependencies
Install all necessary dependencies for the project using npm:

bash
Copy code
npm install
Step 3: Set Up Environment Variables
Create a .env file in the root of the project directory and configure the following variables:

plaintext
Copy code
MONGO_URI=<Your MongoDB connection string>
MAP_API_KEY=<Your Map Service API key>
PORT=3000
Step 4: Run the Application
Start the development server:

bash
Copy code
npm start
By default, the app will be accessible at:

plaintext
Copy code
http://localhost:3000
🛠 Requirements
Ensure you have the following installed on your system:

Node.js (v14.x or later)
MongoDB (local or cloud database)
npm (Node Package Manager)
🔧 Troubleshooting
MongoDB Connection Issues: Ensure your MONGO_URI is correct and your database is running.

Port Already in Use: Update the PORT variable in your .env file or stop the process using the current port.

Missing Dependencies: Run npm install again to ensure all packages are installed.
