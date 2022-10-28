const express = require("express")

const router = express.Router()


//required controller

const {loginUser,signUser,getAAdmin,updateAdditionalInfo,} = require("../controller/employercontroller")
const { updateImage} = require('../controller/uploadcontroller')

//login  post  data

router.post("/login",loginUser)


//signup data

router.post("/signup",signUser)


// GET single user details using id
router.get('/:id', getAAdmin);




// UPDATE a user details from the list using id
router.patch('/login/:id',  updateAdditionalInfo)




// //update image
router.patch('/imageupload/:id',  updateImage)



module.exports = router
