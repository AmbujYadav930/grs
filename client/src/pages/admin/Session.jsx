import React,{useState,useEffect} from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from 'axios'


const Session = () => {
  const[data ,setData]= useState({
    name:'',
  })
  const[mode,setEditMode]=useState(null)
  const[editId,setEditId]=useState(null)
  const [session ,setSession]=useState([])

  const handleChange=(e)=>{
    setData(()=>({...data,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      if(mode){
        const res=await axios.put(`http://localhost:5000/api/session/${editId}`,data)
        alert(res.data.msg)
        setEditMode(false)
        setData({
          name:'',
        })
        handlefetch()

      }
      else{
      const res = await axios.post('http://localhost:5000/api/session/register', data)
      console.log(res);
      window.alert("session registerd")
     
      }
       handlefetch()
    } catch (er) {
      console.log(er)
      window.alert("Sorry Try Again")
    }

  }
  // fetch data

  const handlefetch=async()=>{
    try{
      const res=await axios.get('http://localhost:5000/api/session/show')
      console.log(res.data.Session);
      setSession(res.data.Session)
    }
    catch(er){
      console.log(er)
    }
    console.log(data);
  }
  useEffect(()=>{
     handlefetch(); 

  },[])
  
  // Edit button functionality

  const handleEdit=(a)=>{
    console.log(a);
    setData({
      name:a.name,
      description:a.description
    })
    
    setEditMode(true)
    setEditId(a._id)
    handlefetch()
     

  }
  console.log(data)
  
  const handleDelete= async(a)=>{
    const res=await axios.delete(`http://localhost:5000/api/session/${a}`)
    alert(res.data.msg)
    handlefetch();
    }
    
  
  
  return (
    <>

      <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
        {/*session box started*/}
        <div className="row">
          <div className="col-sm-12 me-5 ">
            <div className="card session-card shadow-sm border-0 rounded-4 ">
              <div className="card-body">
                <h5 className="card-title text-primary text-center fw-bold fs-3">Add New Session</h5>
                <form method="POST" onSubmit={handleSubmit}>
                <div className="d-flex-column">
                  <label className="mb-2 col-sm-12 fw-semibold fs-5 text-muted mt-3" for="inputsession">Session Value</label>
                </div>
                <input type="text" name="name" value={data.name} onChange={handleChange}   placeholder="Enter Session (e.g 2026 2027)" className="form-control border-0  mb-2 w-100 text-muted py-2 fs-4" />

                <div className="d-grid gap-2 d-md-block text-center">
                  <button className="btn btn-primary col-sm-6 border-0 rounded-5 fw-bold fs-5" type="submit" fs-5>{mode?'Update':'Add'}</button>
                </div>
               </form>
              </div>
            </div>
          </div>
        </div>

        {/* session box ended ended */}

        {/*Registered sessions Started  */}
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-sm-10">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="text-muted fw-semibold mb-5">Registered Session</h5>

              {/*DropDown start */}

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <select className="form-select  form-select-shadow-lg rounded " style={{ width: "80px" }}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>

                  <span className="">enteries per page</span>
                </div>

                <input type="text" className="form-control form-control-sm me-2" placeholder="Search records..." style={{ width: "200px" }} />

              </div>

              {/*DropDown Ended*/}

              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>S.No <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
                        </button>
                      </div>
                    </div> </th>
                    <th>SESSION  <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
                        </button>
                      </div>
                    </div>  </th>
                    <th>CREATED BY <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
                        </button>
                      </div>
                    </div>  </th>
                    <th>ACTION   <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
                        </button>
                      </div>
                    </div>  </th>



                  </tr>
                </thead>
                <tbody>
                  {session.map((item,i)=>(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>
                     <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1" onClick={()=>{handleEdit(item)}}>
                        <FiEdit size={14} /> Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1" onClick={()=>{
                        handleDelete(item._id)
                      }}>
                        <FiTrash2 size={14} /> Delete
                      </button>
                    </div> 
                  </td>
                    </tr>
                  ))}

                </tbody>
              </table>


              <div className="d-flex justify-content-between align-items-center mt-5 ">
                <span>Showing to of entry</span>

                {/*pagination */}
                <div className="btn-group w-10">
                  <button className="btn btn-sm btn-outline-secondary">«</button>
                  <button className="btn btn-sm btn-outline-secondary">‹</button>
                  <button className="btn btn-sm btn-primary">1</button>
                  <button className="btn btn-sm btn-outline-secondary">›</button>
                  <button className="btn btn-sm btn-outline-secondary">»</button>
                </div>

              </div>


            </div>
          </div>
        </div>


      </div>



      {/*Registered sessions Ended */}









    </>
  )
}

export default Session