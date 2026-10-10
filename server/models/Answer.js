const mongoose=require('mongoose');
const answerSchema=mongoose.Schema({
 
  userId:{
    type: String ,//mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  questionId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Question",
    required:true
  },
  answer:{
  type:String,
  required:true

 },

  status:{
    type:String,
    enum:['active','inactive','delete'],
    default:'active',
    required:true
  }

},{
  timestamps:true
})

module.exports=mongoose.model("Answer",answerSchema);