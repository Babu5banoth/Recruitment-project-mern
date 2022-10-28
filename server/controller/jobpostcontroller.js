const JobPost = require("../models/jobpostmodel")
const mongoose = require("mongoose")




// get jobPost entire data
const getJobpostdata=async(req,res)=>{
    try{
        const jobpostdata= await JobPost.find().sort({createdAt:-1})
        res.status(200).json(jobpostdata);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}


//get jobpost single data











// Creating JobPost Data
const createJobpostdata= async(req,res)=>{
    try{
        const newjob=new JobPost(req.body)
        const jobpost= await newjob.save()
        res.status(201).json(jobpost)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

// updateing JobPost Data
const updatejobpostData= async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedata= await JobPost.findByIdAndUpdate({_id: id},req.body, {new:true })
        res.status(200).json(updatedata)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

// delete JobPost Data 
const deletedata= async (req,res)=>{
    try{
        const id= req.params.id;
        const deletedata=await JobPost.findByIdAndDelete({_id: id})
        res.status(200).json({deletedata})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}


module.exports={
    getJobpostdata,
    createJobpostdata,
    updatejobpostData,
    deletedata
}