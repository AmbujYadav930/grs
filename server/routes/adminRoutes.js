const express = require('express')
const routes=express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// admin register admin

routes.post('/register',async(req,res)=>{
  try{
    const {name ,email, password} = req.body;
    // check admin exist or not
    const isExist = await Admin.countDocuments();
    if(isExist>0){
      return res.json({"msg":"Admin already Register"});
    }
    //check

    const user= await Admin.findOne({email:email})
    if(user){
      return res.json({"msg":"Email already Register"});
    }
    const a = await new Admin(req.body);
     a.save();
    res.json({"msg":"Admin Register Successfully"})
  }catch(er){
    console.log(er)
    res.json({"msg":"Admin Not Register Successfully"})
  }
});


routes.post('/login', async(req,res)=>{
  try{
    const {email , password}=req.body;

    if(!email){
      return res.json({"msg":"Email not found"})
    }

    const user = await Admin.findOne({email:email})
    if(!user){
      return res.json({"msg":"email not found"})
    }

     
    if(user.password==password){
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{"expiresIn":"1d"})
      res.json({
        "msg":"success",
         "adminId":user._id,
         "name":user.name,
         "token":token
      })
    }else{
      return res.json({"msg":"Password is Incorrect"})
    }

  }catch(er){
    console.log(er)
    res.json({"msg":"Server error"});
  }
})

module.exports = routes; 