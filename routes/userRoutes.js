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
const fs = require("fs");

// Load User model
const User = require("../models/userModel");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  cloudinary.config({
    cloud_name: name,
    api_key: key,
    api_secret: secret
  });

  // Upload file to cloudinary and get the result public_id
  //  Next delete the file in the directory
  let pubKey =
    "https://res.cloudinary.com/hufqpufdw/image/upload/v1572893972/d_k5wgqi.png";

  if (req.body.profilePic != "/uploads/images/d.png") {
    fileName = "." + req.body.profilePic;
    cloudinary.v2.uploader.upload(
      fileName,
      {
        overwrite: true
      },
      function(err, image) {
        if (err) {
          console.warn(err);
        }
        // Store the url to retreieve profile pic
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profilePic: image.url
        });

        console.log("1" + newUser);
        let filePath = "." + req.body.profilePic;
        // Delete file now from local storage
        fs.unlinkSync(filePath);
        setTimeout(function() {
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
        }, 1000);
      }
    );
  } else {
    console.log("2" + newUser);
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profilePic: pubKey
    });

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
  }
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
          name: user.name,
          email: user.email,
          profilePic: user.profilePic
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

// @route POST api/users/delete
// @desc Deletes user
// @access Public
router.post("/delete", (req, res) => {
  //const email = req.body.email;
  console.log(req.body.email);
  let email = req.body.email;
  User.findOneAndDelete({ email }).then(() => {
    res.json("Success");
  });
});

module.exports = router;
