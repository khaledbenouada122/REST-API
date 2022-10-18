const { application } = require("express")
const express= require("express")
const app = express()
const router = express.Router()
app.use(express.json())
const mongoose = require("mongoose")
const user = require("./user/user")
/* import the file  ".env" and manipulate with the dotenv variable     */
const dotenv = require ('dotenv').config({path:"./config/.env"})
/* conexion with the database   */
mongoose.connect(process.MONGO_URI(),(err)=>{
    if (err) throw err 
    else{ 
        console.log("monggose is connected suceesfly")
    }
})
/*   code to add a newcontact in the data     */ 

router.post("/newcontact",(res,req)=>{
    let newcontact= new user(req.body)
    newcontact.save(err,data =>{
        if (err) throw err 
        else{
            res.send ( data , {msg : "posted sucessfully "}) 
        }
    })
})
/*  code to import or find  a contact with identifaction */
router.get("/newcontact/:id",(res,req)=>{
    user.find(
        (err,data)=>{
            if (err) throw err
            else{
                   res.json(data) }})
})
/* code to upadte a user  by adding json data   */
router.put("/updating/: id",(req,res)=>{
    user.findByIdAndUpdate({id:req.params.id},{...req.body},(err,data)=>{
        if (err) throw err
        else{
            res.json(data)
        }
    })
})
/* code delete user from the database  */
router.delete("/delete/:id",(req,res)=>{
    user.findByIdAndDelete({id:req.params.id},(err,data)=>{
        if (err) throw err
        else res.json(data)
    })

})
/*  making the projet in the port 4200 */
app.listen(process.env.Port,(err)=>{
    if (err) throw err
    else{
        console.log("Connexion est etablie sur : "+PORT)
    }
})