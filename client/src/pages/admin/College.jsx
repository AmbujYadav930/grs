import React, { useState ,useEffect } from "react";
import axios from 'axios'

const College = () => {
  const [data, setData] = useState({
    name: '',
    description: ''
  })
  const [mode,setEditMode]=useState(null)
  const[editId,setEditId]=useState(null)
  const [college ,setCollege]=useState([])
  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(mode){
        const res = await axios.put(`http://localhost:5000/api/college/${editId}`, data)
        alert(res.data.msg)
        setEditMode(false)
        setData({
          name:'',
          description:''
        })
        handlefetch();
      }
      else{
      const res = await axios.post('http://localhost:5000/api/college/register', data)
      console.log(res);
      window.alert("college registerd")
      handlefetch()
      }
    } catch (er) {
      console.log(er)
      window.alert("Sorry Try Again")
    }

  }
  // fetch data

  const handlefetch=async()=>{
    try{
      const res=await axios.get(`http://localhost:5000/api/college/show`)
      console.log(res.data.college);
      setCollege(res.data.college)
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
    const res=await axios.delete(`http://localhost:5000/api/college/${a}`)
    alert(res.data.msg)
    handlefetch();

  }

  

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
        {/*college box started*/}
        <div className="row">
          <div className="col-sm-12 me-5 ">
            <div className="card college-card shadow-sm border-0 rounded-4 ">
              <div className="card-body">
                <h5 className="card-title text-primary text-center fw-bold">Add New Colleges</h5>

                <form  method="POST" onSubmit={handleSubmit}>
                <div className="d-flex-column">
                  

                  <label className="mb-2 col-sm-12 fw-semibold text-muted" for="inputCollege">College Name</label>
                </div>

                <input type="text"
                  className="form-control border-0  mb-2 w-100 text-muted py-2"
                  name="name" value={data.name} onChange={handleChange}  placeholder="Enter college name" />

                <label className="mb-2 col-sm-12 text-muted fw-semibold" for="inputCollege">Description</label>

                <textarea type="text" className=" form-control
                mb-3 col-sm-12" name="description"  onChange={handleChange}value={data.description}></textarea>

                <div className="d-grid gap-2 d-md-block text-center">
                  <button className="btn btn-primary col-sm-6 border-0 rounded-5 fw-bold" type="submit">{mode ? 'update':'Add'}</button>

                </div>
              </form>
              </div>
            </div>


          </div>
         </div>
        </div>

        {/* college box ended ended */}

        {/*Registered colleges Started  */}

      <div className="row justify-content-center align-items-center">
        <div className="col-sm-10">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="text-muted fw-semibold mb-5">Registered Colleges</h5>

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

              <table className="table">
                <thead className="table-light f-small">
                  <tr>
                    <th>S.No <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{ height: "10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "10px" }} >
                        </button>
                      </div>
                    </div>  </th>
                    <th>COLLEGE NAME  <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{ height: "10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "10px" }} >
                        </button>
                      </div>
                    </div>  </th>
                    <th>CREATED BY  <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{ height: "10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "10px" }} >
                        </button>
                      </div>
                    </div>  </th>
                    <th>Status  <div className="btn-group-vertical mb-4" role="group">
                      <div className="btn-group dropup" role="group">
                        <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{ height: "10px" }} >
                        </button>
                      </div>
                      <div className="btn-group" role="group border-0">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "10px" }} >
                        </button>
                      </div>
                    </div>   </th>

                  </tr>
                </thead>
                <tbody>
                  {college.map((item,i)=>(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.status}</td>
                      <td>
                        <button className="btn btn-danger" onClick={()=>{handleDelete(item._id)}} >Delete</button>
                        <button className="btn btn-success" onClick={()=>{handleEdit(item)}}>Edit</button></td>
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



      {/*Registered Colleges Ended */}










    </>
  )
};

export default College;
