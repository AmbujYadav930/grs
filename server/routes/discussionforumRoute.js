const express = require("express");
const mongoose=require('mongoose')
const Question = require("../models/Question");
const routes = express.Router();
const Answer =require("../models/Answer")
  //for question register api
  routes.post("/question", async (req, res) => {
    try {
       const{question}=req.body
      const userId=req.headers.userid
      //const { userId, question } = req.body;
      if (!userId || !question) {
        return res.json({ msg: "All fields are required" });
      }
      const a = await new Question({
        userId,
        question,
        status: "active"
      });
      a.save();
      return res.json({ msg: "Question Registered" });
    } catch (er) {
      console.log(er);
      return res.json({ msg: "Server error" });
    }
  });

//fetch all question for admin API
routes.get("/show", async (req, res) => {
  try {
    const data = await Question.find({
      status: ["active", "Inactive"],
    }).populate("userId", "name");
    return res.json({ msg: "data fetched", question: data });
  } catch (er) {
    console.log(er);
    return res.json({ msg: "Server error" });
  }
});

//answer API for any question
routes.post("/answer", async (req, res) => {
  try {
    const { questionId, userId, answer } = req.body;
    if (!questionId || !userId || !answer) {
      return res.json({ "msg": "All fields are required" });
    }
    const data = await new Answer({
      questionId: new mongoose.Types.ObjectId(questionId),
      userId: userId,
      answer: answer,
      status: "active",
    });
    data.save();
    return res.json({ "msg": "Answer added" });
  } catch (er) {
    console.log(er);
    return res.json({ msg: "Server error" });
  }
});

//API for all answer of a particular question
routes.get("/answer/:questionId", async (req, res) => {
  const answers = await Answer.find({ questionId: req.params.questionId });
  res.json({ answers });
});


// Question delete

routes.delete('/:id',async (req,res)=>{
  try{
    const {id}=req.params;
    const data=await Question.findByIdAndUpdate(id,{status:"delete"}) 
    const answer=await Answer.findByIdAndDelete(id, {status:"delete"})
    return res.json({"msg":"Question Deleted"})

  }catch(er){
    console.log(er);
    return res.json({"msg":"server error"})
  }
  
})



module.exports = routes;



