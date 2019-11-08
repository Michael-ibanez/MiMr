const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TimeSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  timeIn: {
    type: String,
    required: true
  },
  timeOut: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let Time = mongoose.model("times", UserSchema);
module.exports = Time;
