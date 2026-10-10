const express=require('express');
const routes=express.Router();
const Session=require('../models/Session');

//register Api

routes.post('/register',async (req,res)=>{
  try{

    const {name}=req.body
    const c=await Session.findOne({name:name});
    if(c){
      return res.json({"msg":"Session Already exist"})
    }
    const ses=await new Session({
      name:name,
      status:"active"

    });

    ses.save();
    return res.json({"msg":"session Registered"})

  }catch(er){

    console.error(er);
    return res.json({"msg":"Server Error"})

  }
})

// all Sessions pdata view

routes.get('/show', async (req,res)=>{
  try{
    const a=await Session.find({status:["active","inactive"]});
    return res.json({"msg":"Data fetched","Session":a })

  }catch(er){
    console.error(er);
    return res.json({"msg":"Server error"})
  }
})

// Session update api

routes.put('/:id',async(req,res)=>{
  try{

    const {id}=req.params;
    const {name}=req.body;
    await Session.findByIdAndUpdate(id,{name:name})
    return res.json({"msg":"Session Updated Successfully"})

  }
  catch(er){
    console.error(er)
    return res.json({"msg":"Server error"})
  }
})
// delete api
routes.delete('/:id',async (req,res)=>{
  try{
    const {id}=req.params;
    const data=await Session.findByIdAndUpdate(id,{status:"delete"}) 
    return res.json({"msg":"Session Deleted"})

  }catch(er){
    console.log(er);
    return res.json({"msg":"server error"})
  }
  
})

routes.get('/active',async(req,res)=>{
  try{
    const data= await Session.find({status:"active"})
    return res.json({"msg":"Session fetched","Session":data})
  }
  catch(er){
    console.error(er);
    return res.json({"msg":"Server Error0"})
  }
})


// blocked /unblocked status api

routes.patch('/:id',async(req,res)=>{
  try{
    const {id}=req.params
    const {status}=req.body
    await Session.findByIdAndUpdate(id,{status:status})
    return res.json({"msg":"Status Updated"})
  }catch(er){
     console.error(er)
     return res.json({"msg":"Server Error"})
  }
})

module.exports=routes;