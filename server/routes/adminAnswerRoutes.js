// const express = require('express');
// const routes = express.Router();
// const Question = require('../models/Question')
// const Answer = require('../models/Answer')

// // 1. Saare active questions fetch karna - Admin ke liye
// routes.get('/questions', async(req,res)=>{
//   try{
//     const questions = await Question.find({status: 'active'})
//       .populate('userId', 'name email')
//       .sort({createdAt: -1});
//     res.status(200).json({msg: "data fetched", questions})
//   }catch(er){
//     res.status(500).json({msg: er.message})
//   }
// })

// // 2. Admin Answer post karega
// routes.post('/answer', async(req,res)=>{
//   try{
//     const {questionId, answer} = req.body;
//     const adminId = req.headers.userid; // admin ka userId

//     if(!questionId || !answer || !adminId) 
//       return res.status(400).json({msg: "All fields are required"})
    
//     await new Answer({ questionId, userId: adminId, answer, status: 'active' }).save();
//     res.status(201).json({msg: "Answer posted by Admin"})
//   }catch(er){
//     res.status(500).json({msg: er.message})
//   }
// })

// module.exports = routes;