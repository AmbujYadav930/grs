const express=require('express');
const routes=express.Router();
const ComplaintType=require('../models/ComplaintType')

//register Api

routes.post('/register',async (req,res)=>{
  try{

    const {name,description}=req.body
    if(!name || !description){
      console.log("all field required")
    }
    const c=await ComplaintType.findOne({name:name});
    if(c){
      return res.json({"msg":"ComplaintType Already exist"})
    }
    const clg=await new ComplaintType({
      name:name,
      description:description,
      status:"active"

    });

    clg.save();
    return res.json({"msg":"ComplaintType Registered"})

  }catch(er){

    console.error(er);
    return res.json({"msg":"Server Error"})

  }
})

// all ComplaintTypes pdata view

routes.get('/show', async (req,res)=>{
  try{
    const a=await ComplaintType.find({status:["active","inactive"]});
    return res.json({"msg":"Data fetched","ComplaintType":a })

  }catch(er){
    console.error(er);
    return res.json({"msg":"Server error"})
  }
})

// ComplaintType update api

routes.put('/:id',async (req,res)=>{
  try{

    const {id}=req.params;
    const {name,description}=req.body;
    await ComplaintType.findByIdAndUpdate(id, {name:name, description:description})
    return res.json({"msg":"ComplaintType Updated Successfully"})

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
    const data=await ComplaintType.findByIdAndUpdate(id,{status:"delete"}) 
    return res.json({"msg":"ComplaintType Deleted"})

  }catch(er){
    console.log(er);
    return res.json({"msg":"server error"})
  }
  
})

routes.get('/active',async(req,res)=>{
  try{
    const data= await ComplaintType.find({status:"active"})
    return res.json({"msg":"ComplaintType fetched","ComplaintType":data})
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
    await ComplaintType.findByIdAndUpdate(id,{status:status})
    return res.json({"msg":"Status Updated"})
  }catch(er){
     console.error(er)
     return res.json({"msg":"Server Error"})
  }
})

module.exports=routes;