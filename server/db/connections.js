const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>{
    console.log("connection is estabilshed")

})
.catch((err)=>{
    console.log(`error is : ${err}`)
})
