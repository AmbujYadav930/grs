const express = require('express')
const routes=express.Router();
const UserLogin = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs')

// UserLogin register UserLogin

routes.post('/login',async(req,res)=>{
  try{
    const {email, password} = req.body;
    // check UserLogin exist or not
    if( !email || !password){
      return({"msg" :"All Fields Required"})

    }
    //check

   const UserLogin = require('../models/User') 

const user = await UserLogin.findOne({email:email}) 
const isMatched = await bcrypt.compare(password, user.password) 
     
    
  
 
      const token=jwt.sign({id:UserLogin._id,email:UserLogin.email},process.env.JWT_SECRET,{"expiresIn":"1d"})
      res.json({
        "msg":"login successfully",
         "UserLoginId":user._id,
         "name":user.name,
         "token":token
      })


  }catch(er){
    console.log(er)
    res.json({"msg":"Server error"});
  }
})

module.exports = routes; 



