const express=require('express');
const routes=express.Router();
const College=require('../models/College');

//register Api

routes.post('/register',async (req,res)=>{
  try{

    const {name,description}=req.body
    if(!name || !description){
      return res.json({"msg":"All fields are Mandatory"})
    }
    const c=await College.findOne({name:name});
    if(c){
      return res.json({"msg":"College Already exist"})
    }
    const clg=await new College({
      name:name,
      description:description,
      status:"active"

    });

    clg.save();
    return res.json({"msg":"College Registered"})

  }catch{

    console.error(er);
    return res.json({"msg":"Server Error"})

  }
})

// all colleges pdata view

routes.get('/show', async (req,res)=>{
  try{
    const a=await College.find({status:["active","inactive"]});
    return res.json({"msg":"Data fetched","college":a })

  }catch{
    console.error(er);
    return res.json({"msg":"Server error"})
  }
})

// college update api

routes.put('/:id',async (req,res)=>{
  try{

    const {id}=req.params;
    const {name,description}=req.body;
    await College.findByIdAndUpdate(id, {name:name, description:description})
    return res.json({"msg":"College Updated Successfully"})

  }
  catch{
    console.error(er)
    return res.json({"msg":"Server error"})
  }
})
// delete api
routes.delete('/:id',async (req,res)=>{
  try{
    const {id}=req.params;
    const data=await College.findByIdAndUpdate(id,{status:"delete"}) 
    return res.json({"msg":"College Deleted"})

  }catch{
    console.log(er);
    return res.json({"msg":"server error"})
  }
  
})

routes.get('/active',async(req,res)=>{
  try{
    const data= await College.find({status:"active"})
    return res.json({"msg":"College fetched","College":data})
  }
  catch(er){
    console.error(er);
    return res.json({"msg":"Server Error"})
  }
})

// blocked /unblocked status api

routes.patch('/:id',async(req,res)=>{
  try{
    const {id}=req.params;
    const {status}=req.body
    await College.findByIdAndUpdate(id,{status:status})
    return res.json({"msg":"Status Updated"})
  }catch(er){
     console.error(er)
     return res.json({"msg":"Server Error"})
  }
})

module.exports=routes;