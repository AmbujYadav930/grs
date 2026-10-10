const express=require('express')
const dotenv= require('dotenv')
dotenv.config(); // .env config
const mongoDB=require('./config/db')
const cors=require('cors')
const app = express();//server call

const PORT = process.env.PORT || 3000    
app.use(express.json())
app.use(cors())
mongoDB(); //db call       

// api started

app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/college',require('./routes/collegeRoute'))
app.use('/api/session',require('./routes/sessionRoute'))
app.use('/api/complaintType',require('./routes/complaintTypeRoute'))
app.use('/api/complaint',require('./routes/complaintRoute'))
app.use('/api/user',require('./routes/userRoute'))
app.use('/api/userlogin',require('./routes/userloginRoute'))
app.use('/api/discussion',require('./routes/discussionforumRoute'))

//app.use('/api/admin/discussion',require('./routes/adminAnswerRoutes'))
// api ended

app.listen(PORT,()=>{
  console.log("Server is running on http://localhost:5000");
})