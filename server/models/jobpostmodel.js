const mongoose=require('mongoose')


const JobPostSchema=mongoose.Schema(
    {
        companyName:{
            type:String,
            required:true
        },
        role:{
            type:String,
            // required:true
        },
        technologies:{
            type:String,
            // required:true
        },
        experience:{
            type:Number,
            // required:true
        },
        location:{
            type:String,
            // required:true
        },
        graduate:{
            type:String,
            // required:true
        },
        english:{
            type:String,
            // required:true
        },
        noticePeriod:{
            type:Number,
            // required:true
        }
      
        
    },
    {timestamps:true}

)

const JobPost = new mongoose.model("jobpost", JobPostSchema)
module.exports = JobPost