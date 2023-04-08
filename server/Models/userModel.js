const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        min:10,
        max:20,
        unique:true,
    },
    Email_ID:{
        type:String,
        required:true,
    },
    Phone_Number:{
        type:String,
        min:10,
        max:10,
    },
    Password:{
        type:String,
        min:8,
    }
})

module.exports=mongoose.model("Clients_Data", customerSchema)