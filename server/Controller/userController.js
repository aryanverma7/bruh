const Client = require("../Models/userModel")
const bcrypt = require("bcrypt")

module.exports.register = async (req, res, next) => {
    try{
        const {UserName, Email_ID, Phone_Number, Password} = req.body
        const isOldUser = await Client.findOne({UserName})
        if(isOldUser){
            return res.json({msg:"Client Already Exists.", status:false})
        }
        const hashpwd = await bcrypt.hash(Password, 10)
        const clientObject = Client.create({
            UserName,Email_ID,Phone_Number,Password: hashpwd
        })
        delete clientObject.Password
        return res.json({status:true, clientObject})
    }
    catch(e){
        next(e)
    }
}