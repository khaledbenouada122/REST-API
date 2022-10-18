const mongoose = require("mongoose")
const Schema =  mongoose.Schema()

const userSchema = {
    firstname : {
        Type : String , 
        required : true
    },
    lastname : {
        Type : String , 
        required : true
    },
    age : Number , 
    adress :  {
        city : String , 
        code : Number ,
    }

}
const user = mongoose.user ("user",userSchema)
module.exports = user
