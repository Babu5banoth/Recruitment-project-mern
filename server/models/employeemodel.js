const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = mongoose.Schema({


    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        // required: true,
    },

    //employee personal details

    role: {
        type: String,
        default: ""
    },
    currentCompany: {
        type: String,
        default: ""
    },
    currentLocation: {
        type: String,
        default: ""
    },

    technology: {
        type: String,
        default: ""
    },
    experience: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    graduate: {
        type: String,
        default: ""
    },
    english: {
        type: String,
        default: ""
    },
    notice: {
        type: String,
        default: ""
    },
    profile:{
        type: String
      
      }


}, { timestamps: true })


//static signup function


userSchema.statics.signup = async (firstName, lastName, email, password, mobileNumber) => {
    const exists = await User.findOne({ email })
    if (exists) {
        throw Error("email already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({ firstName, lastName, email, password: hash, mobileNumber })
    return user

}

//static login function

userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw Error(" incorrect Email ")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error(" incorrect password ")

    }
    else if(!user && !match){
        throw Error("incorrect Email and password")
    }
    return user

}




const User = new mongoose.model("employee ", userSchema)


module.exports = User
