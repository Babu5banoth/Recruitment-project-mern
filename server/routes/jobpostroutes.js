
const express = require("express")
const router = express.Router()

const {
    getJobpostdata,
    createJobpostdata,
    updatejobpostData,
    deletedata
} = require('../controller/jobpostcontroller')

router.get("/", getJobpostdata)

router.post("/", createJobpostdata)

router.patch("/:id", updatejobpostData)

router.delete("/:id", deletedata);





module.exports = router
