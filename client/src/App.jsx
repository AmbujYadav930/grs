import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import AdminDashboard from "./pages/admin/AdminDashboard";
import College from "./pages/admin/College";
import AdminHome from "./pages/admin/AdminHome";
import Session from "./pages/admin/Session";
import Complaint from "./pages/admin/Complaint"
import Users from "./pages/admin/Users"
import AllComplaints from "./pages/admin/Allcomplaint"

import UserDashboard from './pages/user/UserDashboard'
import UserHome from './pages/user/UserHome'
import AddComplaint from './pages/user/AddComplaint'

import MyComplaint from './pages/user/MyComplaint'

import DiscussForum from './pages/user/DiscussForum'

import UpdateProfile from './pages/user/UpdateProfile'

import AdminDiscussion from './pages/admin/AdminDiscussion'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/userRegister" element={<UserRegister />}></Route>
          <Route path="/UserLogin" element={<UserLogin />}></Route>
          {/* admin route start*/}
          <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />}></Route> 
            <Route path="college" element={<College />}></Route>
            <Route path="session" element={<Session />}></Route>
            <Route path="complaint" element={<Complaint />}></Route> 
            <Route path="user" element={<Users />}></Route>
            <Route path="AllComplaints" element={<AllComplaints/>}></Route>

            <Route path="AdminDiscussion" element={<AdminDiscussion/>}></Route>
          </Route>
          {/* admin route ended*/}

          {/*userdashbpard started*/}
          
          <Route path="/user" element={<UserDashboard/>}>
           <Route index element={<UserHome />}></Route>

          <Route path='addComplaint' element={<AddComplaint/>}></Route>  

          <Route path='MyComplaint' element={<MyComplaint/>}></Route>

          <Route path='discussForum' element={<DiscussForum/>}></Route> 

          <Route path='updateProfile' element={<UpdateProfile/>}></Route>
        
          </Route> 

           {/*userdashboard ended */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
