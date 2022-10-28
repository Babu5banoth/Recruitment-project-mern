const mongoose = require("mongoose");

const JobHistorySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // required:true
    },
    technologies: {
      type: String,
      // required:true
    },
    experience: {
      type: Number,
      // required:true
    },
    location: {
      type: String,
      // required:true
    },
    graduate: {
      type: String,
      // required:true
    },
    english: {
      type: String,
      // required:true
    },
    noticePeriod: {
      type: String,
      // required:true
    },
    date: {
      type: Date,
      default: Date.now
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobHistory = new mongoose.model("jobhistory", JobHistorySchema);
module.exports = JobHistory;
