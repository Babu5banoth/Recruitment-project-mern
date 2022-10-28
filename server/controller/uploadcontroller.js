const uploadModel = require("../models/employermodel");

const empUploadModel = require("../models/employeemodel");



// update Image for Employer

const updateImage = async (req, res) => {

  try {
    const id = req.params.id;
    const toserver = await uploadModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(201).json({ message: "true" });

  } catch (err) {

    res.status(400).json({ error: err.message });

  }

};



// update Image for Employee

const empUpdateImage = async (req, res) => {

  try {

    const id = req.params.id;

    const toserver = await empUploadModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(201).json({ message: "true" });

  } catch (err) {

    res.status(400).json({ error: err.message });

  }

};



module.exports = {

  updateImage,

  empUpdateImage

};