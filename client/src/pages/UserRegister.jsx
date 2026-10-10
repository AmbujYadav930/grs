import React,{useState,useEffect} from "react";
import axios from 'axios'
import LogoImg from '../assets/cms.png'
const UserRegister = () => {

const [data , setData]=useState({

      name :'',
      father:'',
      email:'',
      mobile:'',
      gender:'',
      dob:'',
      password:'',
      sessionId:'',
      collegeId:'',
      course:'',
      enrollment:'',
      address:'',

})

    const[college,setCollege]=useState([])
    const[session, setSession]=useState([])

const handleChange=(e)=>{
  console.log(e.target.value);
  setData(()=>({...data, [e.target.name]:e.target.value}))
};
console.log(data);

const handleSubmit=async (e) =>{
  e.preventDefault()
try{
  const res= await axios.post("http://localhost:5000/api/user/register",data)

  
  if(res.data.msg=="Registered Successfully"){
    window.alert("Register Successfully")
    setData({ 
          name: '', 
          father: '',
          email: '',
          mobile: '', 
          gender: '', 
          dob: '', 
          password: '', 
          sessionId: '', 
          collegeId: '', 
          course: '', 
          enrollment: '', 
          address: ''
        });
        }
       
  else{
    window.alert(res.data.msg)
  }
}catch(er){
  console.log(er)
  window.alert("Server Errror")
}

}
   


    const handlefetch=async ()=>{
      try{
        const res1=await axios.get('http://localhost:5000/api/college/active');
        console.log(res1);
        setCollege(res1.data.College)
        const res2 = await axios.get('http://localhost:5000/api/session/active')
        setSession(res2.data.Session)
        console.log(res2)
      }
      catch(er){
        console.error(er)
        console.log("Server Error")
      }
    }
    useEffect(()=>{
      handlefetch()
    }, []);

  return (
    <>
      <div className="container-fluid p-0">
  
        <div className="row">
          {/*left hand side */}
          <div className="col-sm-6 bg-success justify-content-center align-items-center text-white d-flex flex-column p-3">
            <div className="bg-success rounded-4 p-3 mb-4"></div>

            <h2 className="fw-bold mb-3">Join the University Portal</h2>
            <p className="text-center mb-4" style={{ maxwidth: "400px" }}>
              Create your account to submit complaints, track them, and engage
              with the community.
            </p>
            <div className="d-flex align-items-center">
              <span className="badge rounded-circle bg-success-subtle text-success p-2 me-3">
                1
              </span>
              <div>
                <h6 className="mb-0">Personal Details</h6>
                <small>Name, email, password & contact</small>
              </div>
            </div>

             <div className="d-flex align-items-center mt-5">
              <span className="badge rounded-circle bg-success-subtle text-success p-2 me-3">2
              </span>
              <div>
                <h6 className="mb-0">Academic Details</h6>
                <small className="">College, session, course & address</small>
              </div>
            </div>

            <div className="d-flex align-items-center mt-5">
              <span className="badge rounded-circle bg-success-subtle text-success p-2 me-3">3
              </span>
              <div>
                <h6 className="mb-0">Start Using GRS</h6>
                <small className="">Submit & track your complaints</small>
              </div>
            </div>
           {/*left side ended */}

          </div>
          <div className="col-sm-6 d-flex flex-column justify-content-center p-5">
            {/* right hand side form */}
            <img src={LogoImg} alt="logo" style={{width:"60px"}} className="mb-3"/>
            <div className="fw-bold">Create Account</div>
            <div className="text-muted mb-3">Fill in your personal information to get started.</div>

            {/*form started*/}

            <form method="POST" onSubmit={handleSubmit}>
                <div className="row">
              <div className="col-sm-6 mb-3">
              <label className="form-label">Full Name *</label>
              <input type="text" name="name" className="form-control" onChange={handleChange} value={data.name} placeholder="Your full name" />
            </div>

            <div className="col-sm-6 mb-3">
              <label className="form-label">Father Name *</label>
              <input type="text" name="father" className="form-control" onChange={handleChange} value={data.father}  placeholder="Your father name" />
            </div>

            <div className="col-sm-6 mb-3">
              <label className="form-label text-dark">Mobile Number *</label>
              <input type="text" name="mobile" onChange={handleChange} value={data.mobile} className="form-control" placeholder="10 digit mobile" />
            </div>

            <div className="col-sm-6 mb-3">
              <label className="form-label text-dark">Email *</label>
              <input type="email" name="email" onChange={handleChange} value={data.email}
              className="form-control" placeholder="you@email.com" />
            </div>

            <div className="col-md-6 mb-3">
               <label className="form-label ">Gender *</label>
                <select className="form-select rounded-3" name="gender" onChange={handleChange} value={data.gender}  >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-sm-6 mb-3">
              <label className="form-label text-dark">Date of Birth *</label>
              <input type="date" name="dob" onChange={handleChange} value={data.dob} className="form-control" placeholder="enter your dob" />
            </div>

            <div className="col-md-6 mb-3">
               <label className="form-label ">College name *</label>
                <select className="form-select rounded-3" name="collegeId" onChange={handleChange} value={data.collegeId} >

                <option value="">Select College Name</option>
                {college.map((item)=>(
                  <option value={item._id}>{item.name}</option>

                ))}

              </select>
            </div>

            <div className="col-md-6 mb-3">
               <label className="form-label ">Course Name *</label>
                <select className="form-select rounded-3" name="course" onChange={handleChange} value={data.course} >
                <option value="">-- Select Course --</option>
                <option value="BTech">BTECH</option>
                <option value="diploma">Diploma </option>
                <option value="Bca">BCA</option>
                <option value="other">OTHERS</option>

              </select>
            </div>

          <div className="col-sm-6 mb-3">
              <label className="form-label text-dark">Enrollment *</label>
              <input type="text" name="enrollment" className="form-control" onChange={handleChange} value={data.enrollment} placeholder="enter your enrollment" />
            </div>




            <div className="col-md-6 mb-3">
               <label className="form-label ">Session *</label>
                <select className="form-select rounded-3" name="sessionId" onChange={handleChange} value={data.sessionId} >
                <option value="">Select Session</option>
                {session.map((item)=>(
                   <option value={item._id}>{item.name}</option>
                   ))}
                
              </select>
            </div>

            <div className="col-md-6 mb-3">
               <label className="form-label ">Address *</label>
               <textarea className="form-control" name="address" type="text" onChange={handleChange}  value={data.address}  placeholder="Address"></textarea>
             </div>


             <div className="col-sm-12 mb-3">
              <label className="form-label text-dark">Password *</label>
              <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password} placeholder="create a strong password" />
            </div>
             
             <div className="col-sm-12 mt-3 ">
              <button type="submit"  className="btn btn-success w-100">Next Step</button>
             </div>

            </div>  
            </form>

            {/*form ended*/}



          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
