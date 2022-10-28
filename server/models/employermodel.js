const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = mongoose.Schema({


    nameOfTheCompany: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    contactNumber: {
        type: String,
        // required: true,

    },
    CompanyType: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true,
    },

    //employer personal details



    address: {
        type: String,
        default: ""

    },
    noOfEmployees: {
        type: String,
        default: ""

    },
    headQuarters: {
        type: String,
        default: ""

    },
    about: {
        type: String,
        default: ""


    },
    profile:{
        type: String
      
      }



}, { timestamps: true })


//static signup function


userSchema.statics.signup = async (nameOfTheCompany, email, contactNumber, CompanyType, password) => {
    const exists = await User.findOne({ email })
    if (exists) {
        throw Error("email already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({ nameOfTheCompany, email, contactNumber, CompanyType, password: hash })
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
    else if (!user && !match) {
        throw Error("incorrect Email and password")
    }
    return user

}




const User = new mongoose.model("employer ", userSchema)


module.exports = User
