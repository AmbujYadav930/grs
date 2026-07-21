#GRS
## step 1->
create a folder name ->grs

## step 2
create a react project with bootstrap ,axios ,react-router-dom

## step 3
create server folder for handle the backend in the parent folder grs

 # server 
 1. initialiaze the node app using npm init -y
 2.install all  require packagws.

 ##express 
 use for logic and creating REST API's
 npm i express

 ## mongoose

 used for mongodb database handling 
 npm i mongoose

 ## dotenv
credentials like db connection network port etc


## bycryptjs

it is used for hash the password in the encrypted way 
npm i bycryptjs

## nodemon

it is used for handle the server start action in the real time
npm i nodemon

## nodemailer

it is used for implemnt the email sending functionality to user.
npm i nodemailer

## jsonwebtoken
it is used for authentication

#npm i express mongoose dotenv bcryptjs nodemon

## Schema
### Admin 
name
email
password

## college Schema

name
Description
status

## session Schema

name
status

## college Schema
Ex-complaint type
name
Description
status
timestamps

# client

Folder ->src/pages
       1.Home.jsx
       2.AdminLogin.jsx
       3.UserLogin.jsx
       4.UserRegister.jsx
             name, fname , email , mobile, college(select) , course(select) , session(select),
             seesion(select) , dob , gender , address
       5.Folder
             admin
      6.Folder
              user     



const express = require('express');
const routes = express.Router();
const Session = require('../models/Session');

//register Api
routes.post('/register', async (req, res) => {
  try {
    const { name } = req.body
    if(!name) return res.status(400).json({"msg":"Name is required"})

    const c = await Session.findOne({ name: name });
    if (c) {
      return res.status(400).json({ "msg": "Session Already exist" })
    }
    
    const ses = await Session.create({ // await + create
      name: name,
      status: "active"
    });

    return res.status(201).json({ "msg": "session Registered", "data": ses })

  } catch (er) {
    console.error(er);
    return res.status(500).json({ "msg": "Server Error", "error": er.message })
  }
})

// all Sessions data view
routes.get('/show', async (req, res) => {
  try {
    const a = await Session.find({ status: { $in: ["active", "inactive"] } }); // <-- $in fix
    return res.json({ "msg": "Data fetched", "session": a }) // <-- session small

  } catch (er) {
    console.error(er);
    return res.status(500).json({ "msg": "Server error" })
  }
})

// Session update api
routes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await Session.findByIdAndUpdate(id, { name: name }, { new: true }) // new:true
    if(!updated) return res.status(404).json({"msg":"Session not found"})
    return res.json({ "msg": "Session Updated Successfully", "data": updated })

  }
  catch (er) {
    console.error(er)
    return res.status(500).json({ "msg": "Server error" })
  }
})

// delete api - soft delete
routes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Session.findByIdAndUpdate(id, { status: "delete" })
    return res.json({ "msg": "Session Deleted" })

  } catch (er) {
    console.error(er);
    return res.status(500).json({ "msg": "server error" })
  }
})

routes.get('/active', async (req, res) => {
  try {
    const data = await Session.find({ status: "active" })
    return res.json({ "msg": "Session fetched", "session": data }) // session small
  }
  catch (er) {
    console.error(er);
    return res.status(500).json({ "msg": "Server Error" })
  }
})


// blocked /unblocked status api
routes.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body
    const updated = await Session.findByIdAndUpdate(id, { status: status }, { new: true })
    return res.json({ "msg": "Status Updated", "data": updated })
  } catch (er) {
    console.error(er)
    return res.status(500).json({ "msg": "Server Error" })
  }
})

module.exports = routes;