
const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const connectDB = require("./model/connectDB")
const templatePath = path.join(__dirname, '../templates')
const route = require("./routes/userRoute")
const router = require("./routes/userDataRoute")
const dotenv = require("dotenv")
const approuter = require("./routes/appoinmentroute")

const routee = require("./routes/medicalRoute")
const labReportRoutes = require("./routes/labReportRoutes");

app.use(express.static(path.join(__dirname, '../src')));
dotenv.config();

connectDB();

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.use(express.static('public'));

// 'img' folder is inside 'public'
app.use('/img', express.static('public/img'));
app.use(express.urlencoded({ extended: false }))

app.use("/", route)
app.use("/api", router)
app.use("/api", approuter)

app.use("/", routee)
app.use("/", labReportRoutes);
app.use('/uploads', express.static('uploads'));

const notificationRoutes = require('./routes/notificationRoutes');
app.use('/api/user', notificationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
})
