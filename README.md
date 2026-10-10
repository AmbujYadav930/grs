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


