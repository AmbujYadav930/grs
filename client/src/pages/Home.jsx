import React from "react";
import LNMU from "../assets/cms.png";
import admin from "../assets/admin.png"
import register from "../assets/ragistration .png"
import userLogin from "../assets/userlogin2.png"
import{Link} from "react-router-dom" 
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* top row */}
        <div className="row bg-light text-center my-5 ">
          <div className="col-sm-12">
            <img src={LNMU} alt=""  className='img-fluid' width="200px"/>
            <h3 className="UName text-primary">
              Lalit Narayan Mithila University Darbhanga Bihar
            </h3>
            <h5 className="text-dark">Grievance Redressal Portal</h5>
          </div>
        </div>
  
       {/*top row end*/}

       {/* cards row started */}
          <div className="row my-5">                       
            <div className="col-sm-4 ">
                <Link to='/adminLogin' className="text-decoration-none">
                <div className="box card d-flex flex-row justify-content-evenly ">
                  <div className="py-5">
                    <img src={admin} alt="" className="img-fluid" width="100px" />
                    </div>

                    <div className="py-5">
                      <h4 className="">Admin Login</h4>
                      <p className="">For Admin only</p>
                    </div>
                  </div>

                </Link>

              </div>

             <div className="col-sm-4 ">
                <Link to='/userRegister' className="text-decoration-none">
                <div className="box card d-flex flex-row justify-content-evenly ">
                  <div className="py-5">
                    <img src={register} alt="" className="img-fluid" width="100px" />
                    </div>

                    <div className="py-5">
                      <h4 className="">User Registeration</h4>
                      <p className="">For User Registration</p>
                    </div>
                  </div>

                </Link>

              </div>



              <div className="col-sm-4 ">
                <Link to='/UserLogin' className="text-decoration-none">
                <div className="box card d-flex flex-row justify-content-evenly ">
                  <div className="py-5">
                    <img src={userLogin} alt="" className="img-fluid" width="100px" />
                    </div>

                    <div className="py-5">
                      <h4 className="">User </h4>
                      <p className="">For User login</p>
                    </div>
                  </div>

                </Link>

              </div>


            </div>
          </div>
          
         {/* cards row ended */}
         {/* footer started */}
         <footer className="bg-primary ">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-light py-3">
                <p className="mb-0">
                  All rights reserved &copy; 2026-2027 Designed and Developed by Ambuj Yadav
                </p>
              </div>
            </div>
          </div>


         </footer>

         {/* footer ended */}

      </div>
  

     
    
  );
};

export default Home;
