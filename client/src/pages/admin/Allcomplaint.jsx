// import React, {useState} from 'react'

// const Allcomplaint = () => {

//   const[data,setData]=useState({
//     date:"",
    
    
//   })

  
//   return (
//     <>
    
//     <div className="row justify-content-center align-items-center">
//         <div className="col-sm-12">
//           <div className="card shadow-sm border-0 rounded-4">
//             <div className="card-body p-4">
//               <h5 className="text-muted fw-semibold mb-5">All University Complaints</h5>

//               {/*DropDown start */}

//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div className="d-flex align-items-center gap-2">
//                   <select className="form-select  form-select-shadow-lg rounded " style={{ width: "80px" }}>
//                     <option value="10">10</option>
//                     <option value="25">25</option>
//                     <option value="50">50</option>
//                     <option value="100">100</option>
//                   </select>

//                   <span className="">enteries per page</span>
//                 </div>

//                 <input type="text" className="form-control form-control-sm me-2" placeholder="Search records..." style={{ width: "200px" }} />

//               </div>

//               {/*DropDown Ended*/}

//               <table class="table table-sm table-hover">
//                 <thead className="table-light f-small">
//                   <tr>
//                     <th>S.No <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>  </th>
//                     <th>DATE  <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>  </th>
//                     <th>STUDENT DETAILS  <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>  </th>
//                     <th>COMPLAINT TYPE <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>   </th>

//                      <th>DESCRIPTION <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>   </th>

//                     <th>DOCUMENT <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>   </th>

//                     <th>ACTION <div className="btn-group-vertical mb-4" role="group">
//                       <div className="btn-group dropup" role="group">
//                         <button type="button" className="btn dropdown-toggle border-0 " data-bs-toggle="dropdown" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                       <div className="btn-group" role="group border-0">
//                         <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"10px" }} >
//                         </button>
//                       </div>
//                     </div>   </th>

//                   </tr>
//                 </thead>
//                 <tbody>
//                 </tbody>
//               </table>


//               <div className="d-flex justify-content-between align-items-center mt-5 ">
//                 <span>Showing to of entry</span>

//                 {/*pagination */}
//                 <div className="btn-group w-10">
//                   <button className="btn btn-sm btn-outline-secondary">«</button>
//                   <button className="btn btn-sm btn-outline-secondary">‹</button>
//                   <button className="btn btn-sm btn-primary">1</button>
//                   <button className="btn btn-sm btn-outline-secondary">›</button>
//                   <button className="btn btn-sm btn-outline-secondary">»</button>
//                 </div>

//               </div>


//             </div>
//           </div>
//         </div>


//       </div>



    
    
//     </>
//   )
// }

// export default Allcomplaint


import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Allcomplaint = () => {

  const [complaints, setComplaints] = useState([]) // sare complaint yaha store honge
  const [filter, setFilter] = useState("") // status filter
  const [loading, setLoading] = useState(true)

  // 1. Page load pe API call
  const fetchAll = async () => {
    try {
      setLoading(true)
      const adminId = localStorage.getItem("userId") // admin ka id
      const res = await axios.get(
        `http://localhost:5000/api/complaint/all?cmpStatus=${filter}`,
        { headers: { userid: adminId } }
      )
      setComplaints(res.data)
    } catch (err) {
      console.log(err)
      alert("Error fetching complaints")
    } finally {
      setLoading(false)
    }
  }

  // 2. Status update karne ke liye
  const updateStatus = async (id, newStatus) => {
    try {
      const adminId = localStorage.getItem("userId")
      await axios.put(
        `http://localhost:5000/api/complaint/update/${id}`,
        { cmpStatus: newStatus },
        { headers: { userid: adminId } }
      )
      alert("Status Updated")
      fetchAll() // list refresh
    } catch (err) {
      alert("Error updating")
    }
  }

  useEffect(() => {
    fetchAll()
  }, [filter]) // filter change hote hi dubara call

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <h5 className="text-muted fw-semibold mb-5">All University Complaints</h5>
                <span className="badge bg-primary">{complaints.length}</span>
              </div>

              {/*DropDown start */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <select
                    className="form-select form-select-shadow-lg rounded"
                    style={{ width: "150px" }}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="notProcessed">Not Processed</option>
                    <option value="pending">Pending</option>
                    <option value="close">Close</option>
                  </select>
                </div>

                <input type="text" className="form-control form-control-sm me-2" placeholder="Search records..." style={{ width: "200px" }} />
              </div>
              {/*DropDown Ended*/}

              <div className="table-responsive">
                {loading? <p>Loading...</p> : (
                  <table className="table table-sm table-hover">
                    <thead className="table-light f-small">
                      <tr>
                        <th>S.No</th>
                        <th>DATE</th>
                        <th>STUDENT DETAILS</th>
                        <th>COMPLAINT TYPE</th>
                        <th>DESCRIPTION</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complaints.length > 0? complaints.map((item, i) => (
                        <tr key={item._id}> {/* key zaroori hai */}
                          <td>{i + 1}</td>
                          <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                          <td>
                            <div className="fw-semibold">{item.userId?.name}</div>
                            <small className="text-muted">{item.userId?.email}</small>
                          </td>
                          <td>{item.cmpId?.name}</td>
                          <td>{item.description}</td>
                          <td>
                            <span className={`badge bg-${item.cmpStatus === 'close'? 'success' : item.cmpStatus === 'pending'? 'warning' : 'secondary'}`}>
                              {item.cmpStatus}
                            </span>
                          </td>
                          <td>
                            <td>
                     <select 
    className="form-select form-select-sm"
    value={item.cmpStatus}
    onChange={(e) => updateStatus(item._id, e.target.value)}
  >
    <option value="notProcessed">Not Processed</option>
    <option value="pending">Pending</option>
    <option value="proceed">Proceed</option>  {/* new */}
    <option value="closed">Closed</option>    {/* new */}
  </select>
</td>
                          </td>
                        </tr>
                      )) : (
                        <tr><td colSpan="7" className="text-center text-muted">No complaints found</td></tr>
                      )}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center mt-5">
                <span>Showing {complaints.length} entries</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Allcomplaint