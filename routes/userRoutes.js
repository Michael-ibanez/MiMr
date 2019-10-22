const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const cloud = require("../config/keys").CloudURL;
const name = require("../config/keys").CloudName;
const key = require("../config/keys").CloudKey;
const secret = require("../config/keys").CloudSecret;
const cloudinary = require("cloudinary");

// Load User model
const User = require("../models/userModel");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  console.log(req.body);

  cloudinary.config({
    cloud_name: name,
    api_key: key,
    api_secret: secret
  });
  let profilePic = new File(req.body.profilePic);
  console.log(profilePic);

  cloudinary.uploader.upload(profilePic, function(error, result) {
    console.log(result, error);
    req.body.profilePic = result.public_id;
  });

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profilePic: req.body.profilePic
  });

  console.log(newUser);

  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
