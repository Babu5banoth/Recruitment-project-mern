const Jobhist = require("../models/jobHistorymodel")
const mongoose = require("mongoose")




// get jobHistory entire data
const getJobhistdata=async(req,res)=>{
    try{
        const jobhistdata= await Jobhist.find().sort({createdAt:-1})
        res.status(200).json(jobhistdata);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}


// Creating JobHistory Data
const createJobhisttdata= async(req,res)=>{
    try{
        const newjob=new Jobhist(req.body)
        const jobhist= await newjob.save()
        res.status(201).json(jobhist)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

// updateing Jobhist Data
// const updatejobhistData= async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const updatedata= await Jobhist.findByIdAndUpdate({_id: id},req.body, {new:true })
//         res.status(200).json(updatedata)
//     }
//     catch(err){
//         res.status(400).json({error:err.message})
//     }
// }

// delete Jobhist Data 
// const deletedata= async (req,res)=>{
//     try{
//         const id= req.params.id;
//         const deletedata=await Jobhist.findByIdAndDelete({_id: id})
//         res.status(200).json({deletedata})
//     }
//     catch(err){
//         res.status(400).json({error:err.message})
//     }
// }


module.exports={
    getJobhistdata,
    createJobhisttdata
}