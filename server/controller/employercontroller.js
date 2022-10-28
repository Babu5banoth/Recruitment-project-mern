
const User = require("../models/employermodel")
const createToken = require("../utils/token")
const mongoose = require("mongoose");


// employer login

const loginUser = async (req, res) => {

    const { email, password} = req.body
    try {
        const user = await User.login( email, password)

        //create token

        const token = createToken(user._id)
        res.status(200).json({ user:user,token})

    } catch (err) {
        res.status(400).json({ error: err.message })
    }


}

//singup

const signUser = async (req, res) => {

    const { nameOfTheCompany,  email, contactNumber,  CompanyType, password} = req.body
    try {
        const user = await User.signup(nameOfTheCompany,  email, contactNumber,  CompanyType, password)

        //create token
 
        const token = createToken(user._id)
        res.status(200).json({ email, user ,token})

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

// GET all admininfo data

const getAdmin = async (req, res) => {
    const user_id = req.user._id
    const allAdmin = await  User.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(allAdmin);
};


// GET single Admin

const getAAdmin = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such admin details found!" });
    }
    const singleAdmin = await  User.findById(id);

    if (!singleAdmin) {
        return res.status(404).json({ error: "admin not available." });
    }

    res.status(200).json(singleAdmin);
};



// additional update data


const updateAdditionalInfo = async (req, res) => {

    const { id } = req.params;
    const { address, noOfEmployees, headQuarters,about  } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "No additional user info available." });
    }
    const updateUserInfo = await User.findOneAndUpdate({ _id: id }, { address, noOfEmployees, headQuarters,about }, { new: true })
    if (!updateUserInfo) {
  
      return res.status(404).json({ error: "No pervious info available." });
    }
    res.status(200).json(updateUserInfo);
  
  };




module.exports = {
    loginUser, signUser, getAdmin ,getAAdmin,updateAdditionalInfo

}
