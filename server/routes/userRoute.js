const express=require('express')
const routes=express.Router()
const User=require('../models/User')

// api register

routes.post('/register', async(req,res)=>{
  try{
    const{
      name,
      father,
      email,
      mobile,
      gender,
      dob,
      password,
      sessionId,
      collegeId,
      course,
      enrollment,
      address

    }=req.body
    //
    if(!name || !father || !email || !mobile || !gender || !dob || !password || !sessionId || !collegeId || !course || !enrollment || !address){
      return res.json({"msg" : "All fields are required"})
    }
    const isExist = await User.findOne({email:email})
    if(isExist){
      return res.json({"msg":"Email Already Registered"})
    }
    const isEnroll=await User.findOne({enrollment:enrollment})
    if(isEnroll){
      return res.json({"msg":"Enrollment Already Registered"})
    }

    const a = await new User({
      name:name,
      father:father,
      email:email,
      mobile:mobile,
      gender:gender,
      dob:dob,
      password:password,
      sessionId:sessionId,
      collegeId:collegeId,
      course:course,
      enrollment:enrollment,
      address:address,
    



    })
    a.save();
    return res.json({"msg":"Registered Successfully"})

  }
  catch(er){
    console.log(er)
    return res.json("Server Error")
  }
})

// all user show api

routes.get('/show', async (req,res)=>{
  try{
    const a=await User.find({status:["active","inactive"]}).populate('collegeId','name').populate('sessionId','name')
    return res.json({"msg":"Data fetched","Session":a })

  }catch(er){
    console.error(er);
    return res.json({"msg":"Server error"})
  }
})

// delete api
routes.delete('/:id',async (req,res)=>{
  try{
    const {id}=req.params;
    const data=await User.findByIdAndUpdate(id,{status:"delete"}) 
    return res.json({"msg":"user management Deleted"})

  }catch(er){
    console.log(er);
    return res.json({"msg":"server error"})
  }
  
})

// admin api for students View

routes.get('/user',async(req,res)=>{
  try{
    const data=await User.find({status:['active','inactive']})
    return res.json({"msg":"Users fetched",user:data})
  }
  catch(er){
    console.log(er)
    return res.json({"msg":"Server Error"})
  }
  
})

// View profile for particular student
routes.get('/profile/:id', async(req,res)=>{
  try{
    const{id}=req.params;
    const data=await User.findById(id);
    res.json({"msg":"User Fetched",user:data})
  }
  catch(er){
    console.log(er);
    return ResizeObserver.json({"msg":"Server error"})
  }
})

// // Block / Unblock user
// router.put('/block/:id', async(req,res)=>{
//   try {
//     const user = await User.findById(req.params.id)
//     if(!user) return res.json({msg: "User not found"})

//     user.isBlocked = !user.isBlocked 
//     await user.save()
    
//     res.json({msg: user.isBlocked ? "User Blocked" : "User Unblocked"})
//   } catch (err) { res.json({msg: err.message}) }
// })



module.exports=routes