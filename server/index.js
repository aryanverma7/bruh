const userRoutes = require("./Routes/userRoutes")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
require("dotenv").config()

app.use(express.json())
server = app.listen(process.env.PORT, () => {
    console.log(`server started at port : ${process.env.PORT}\nhttp://localhost:${process.env.PORT}`);
})

app.use("/harsh", userRoutes)

mongoose.connect(process.env.mongourl, {
    useNewUrlParser:true, 
    useUnifiedTopology:true,

}).then(()=>{
    console.log("db connection successful");
}).catch((err)=>{
    console.log(err.message);
})

