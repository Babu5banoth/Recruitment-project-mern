
const express = require("express")
const router = express.Router()

const {
    getJobhistdata,
    createJobhisttdata
} = require('../controller/jobHistorycontroller')

router.get("/", getJobhistdata);

router.post("/", createJobhisttdata);

// router.patch("/:id", updatejobpostData);

// router.delete("/:id", deletedata);





module.exports = router;