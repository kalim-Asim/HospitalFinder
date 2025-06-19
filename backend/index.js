const express = require("express")
const app = express()
const path = require("path")
const connectDB = require("./db/connectDB")
const templatePath = path.join(__dirname, '../frontend')
const route = require("./routes/userRoute")
const router = require("./routes/userDataRoute")
const dotenv = require("dotenv")
const approuter = require("./routes/appoinmentroute")
const routee = require("./routes/medicalRoute")
const labReportRoutes = require("./routes/labReportRoutes");
const notificationRoutes = require('./routes/notificationRoutes');

app.use(express.static(path.join(__dirname, '../assets')));
dotenv.config();

connectDB();

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.use(express.static('backend'));

app.use('/img', express.static('backend/img'));
app.use(express.urlencoded({ extended: false }))

app.use("/", route)
app.use("/api", router)
app.use("/api", approuter)

app.use("/", routee)
app.use("/", labReportRoutes);
app.use('/uploads', express.static('uploads'));

app.use('/api/user', notificationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
})
