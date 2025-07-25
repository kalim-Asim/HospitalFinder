const express = require("express");
const app = express();
const Doctor = require("../model/doctorModel");
const Activity = require("../model/activityModel"); 
const Appointment = require("../model/appointModel");
const {
  EditProfile,
  Signup,
  Login,
  ForgotPassword,
  ResetPassword,
  Bookappointment,
  AddDoctor,
  AddLabTest } = require("../controller/userController")
const route = express.Router();
const path = require("path");
const User = require("../model/userModel");
const templatePath = path.join(__dirname, '../../frontend')
app.use(express.static(path.join(__dirname, '../../assets')));

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.static('backend'));
app.use('/img', express.static('backend/img'));    // Assuming 'img' folder is inside 'public'
app.use(express.urlencoded({ extended: false }))

route.get("/", (_, res) => res.render("homepage"))
route.get("/login", (_, res) => res.render("login"))
route.get("/signup", (_, res) => res.render("signup"))
route.get("/doctors", (_, res) => res.render("doctors"))
route.get("/add-doctor", (_, res) => res.render("add-doctor"))
route.get("/labtests", (_, res) => res.render("labtests"))
route.get("/appointments", (_, res) => res.render("appointments"))
route.get("/user-profile", (_, res) => res.render("user-profile"))
route.get("/forgot-password", (_, res) => {
  res.render("forgot-password");
})
route.get('/Admin-Dashboard', async (_, res) => {
  try {
    const totalDoctors = await Doctor.countDocuments();
    const recentActivities = await Activity.find().sort({ timestamp: -1 }).limit(10);
    const totalUsers = await User.countDocuments();
    // Format timestamps
    const formattedActivities = recentActivities.map(activity => ({
      description: activity.description,
      timestamp: activity.timestamp.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    }));

    res.render('Admin-Dashboard', { totalDoctors, totalUsers, recentActivities: formattedActivities });
  } catch (error) {
    console.error("Error loading admin dashboard: ", error);
    res.status(500).send("Error loading admin dashboard");
  }
});
route.get('/book-appointment', async (_, res) => {
  try {
    const doctors = await Doctor.find({}, 'name speciality'); // Fetch only name and specialty
    console.log("Doctors fetched:", doctors); // Log the fetched doctors
    res.render('book-appointment', { doctors }); // Pass doctors to the view
    
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).send("Error loading page");
  }
});
route.get('/api/specialties-count', async (_, res) => {
  try {
    const specialtiesCount = await Doctor.aggregate([
      { $group: { _id: "$specialty", count: { $sum: 1 } } }
    ]);
    res.json(specialtiesCount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch specialties count' });
  }
});
route.get('/api/doctors', async (_, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});
route.get('/api/appointments', async (_, res) => {
  try {
    const appointments = await Appointment.find()
      .sort({ appointmentDate: -1 }) // Sort by appointment date descending (most recent first)
      .limit(5);  // Limit to 5 recent appointments
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
})
route.get('/notifications', (_, res) => {
  res.render('notifications');  
});
route.get("/reset-password/:token", (req, res) => {
  res.render("reset-password", { token: req.params.token });
});
route.get("/edit-profile", async (_, res) => {
  res.render("edit-profile");
});
route.post("/signup", Signup);
route.post("/login", Login);
route.post("/forgot-password", ForgotPassword);
route.post("/reset-password/:token", ResetPassword);
route.post("/edit-profile", EditProfile);
route.post("/add-doctor", AddDoctor);
route.post("/book-appointment", Bookappointment);
route.post("/labtests", AddLabTest)
module.exports = route;