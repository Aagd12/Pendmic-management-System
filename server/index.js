require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactRoutes=require("./routes/contactuser");
const vaccinationRoutes =require("./routes/vaccination");
const vaccinationstatusRoutes =require("./routes/vaccinationstatus");
const AdminRoutes =require("./routes/admin");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookvaccine",vaccinationRoutes);
app.use("/api/showvaccine",vaccinationstatusRoutes);
app.use("/api/admin",AdminRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
