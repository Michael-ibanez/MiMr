// This is what heroku will look at to start running the app
// No need to edit this MANUEL AND MARCOS

// Creates constants
const express = require("express");
const http = require("http");
const path = require("path");
const passport = require("passport");
const users = require("./routes/userRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary-core").Cloudinary.new();
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Starts express
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Cloudinary Config
const cloud = require("./config/keys").CloudURL;

// Connect to Cloudinary
if (typeof cloud === "undefined") {
  console.warn("!! cloudinary config is undefined !!");
  console.warn("export CLOUDINARY_URL or set dotenv file");
} else {
  console.log("cloudinary config:");
  console.log(cloudinary.config());
}

// Creates app and starts the app on either local(8080) or online
// and is determined by heroku at runtime
app.use(express.static(path.join(__dirname, "build")));
app.use("/api/users", users);

// Using this to send a resquest form from the frontend, its only to upload our
// picture and then deploy it to cloudinary in the userRoutes. Afterwards we
// will delete it later on.
app.use(cors());
app.use(fileUpload());

app.post("/upload", (req, res, next) => {
  let imageFile = req.files.file;
  imageFile.mv(`${__dirname}/uploads/images/${req.body.filename}`, err => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ file: `/uploads/images/${req.body.filename}` });
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder there
  app.use(express.static("client/build"));

  app.get("*", (reg, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || "5000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
