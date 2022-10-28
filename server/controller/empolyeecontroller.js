const User = require("../models/employeemodel")
const createToken = require("../utils/token")
const mongoose = require("mongoose");
const multer = require("multer");
const path = require('path');
const fs = require("fs");



// login data

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

    const { firstName, lastName, email, password, mobileNumber} = req.body
    try {
        const user = await User.signup(firstName, lastName, email, password, mobileNumber)

        //create token
 
        const token = createToken(user._id)
        res.status(200).json({  user:user ,token})

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

// GET single USER

const getASingleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such user details found!" });
    }
    const singleUser = await User.findById(id);
  
    if (!singleUser) {
      return res.status(404).json({ error: "user not available." });
    }
  
    res.status(200).json(singleUser);
  };
  


// additional update data


const updateAdditionalInfo = async (req, res) => {

    const { id } = req.params;
    const { role, currentCompany, currentLocation, technology, experience, location, graduate, english, notice } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "No additional user info available." });
    }
    const updateUserInfo = await User.findOneAndUpdate({ _id: id }, { role, currentCompany, currentLocation, technology, experience, location, graduate, english, notice }, { new: true })
    if (!updateUserInfo) {
  
      return res.status(404).json({ error: "No pervious info available." });
    }
    res.status(200).json(updateUserInfo);
  
  };



  



  
// //Storing image in folder in folder
// const storage = multer.diskStorage({
//   destination: function(req, res, cb) {
//       cb(null, 'uploads');
//   },
//   filename: function(req, file, cb) {   
//       cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }

// ///get image 

// const getImage = async(req,res) => {
//   const id = req.params.id
//   const allImages=await User.findById({_id:id})
//   res.send(allImages)
// }

// const upload = multer({ storage, fileFilter }).single('photo')
// console.log(upload);


// // patch image

// const postImage = async (req, res) =>{
//   upload(req,res,async(err)=>{

//       if(err){
//           console.log(err);
//       }else{
//           const id=req.params.id;
//           await User.findByIdAndUpdate({_id:id}, {testImage : {
//                       // data: req.file.filename,
//                       data:fs.readFileSync("uploads/"+req.file.filename),
//                       contentType: "image/png"
//                   }})
     
//                   .then(()=>{
//                      res.send("Successfully uploaded!")
//                      // getImage(S)
//                  })
//                  .catch((err)=>{
//                     console.log(err);
//                  })
//              }
//          })
//      }






module.exports = {
    loginUser, signUser,getASingleUser,updateAdditionalInfo
   

}