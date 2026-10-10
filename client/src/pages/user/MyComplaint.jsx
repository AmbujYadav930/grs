import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComplaint = () => {
  const [complaints, setComplaints] = useState([]); // management ki jagah complaints
  const [loading, setLoading] = useState(true);

  // 1. Page load hote hi apni complaints fetch karo
  const fetchMyComplaints = async () => {
    try {
      const userId = localStorage.getItem("userId"); // login ke time save kiya hoga
      const res = await axios.get('http://localhost:5000/api/complaint/my', {
        headers: { userid: userId } // backend me yahi chahiye
      });
      setComplaints(res.data);
    } catch (er) {
      console.log(er);
      alert("Error fetching complaints");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyComplaints();
  }, []);

  return (
    <>
      <div className="my-complaint-container">
        <div className="my-complaint-header d-flex justify-content-between">
          <h5><i className="bi bi-list-ul"></i> My Complaints</h5>
          <span className="badge bg-primary">{complaints.length}</span>
        </div>

        {/* Top Controls */}
        <div className="row mb-3 align-items-center">
          <div className="col-md-6 d-flex align-items-center gap-2">
            <select className="form-select" style={{ width: '80px' }}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end mt-2 mt-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search records..."
              style={{ width: '250px' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          {loading ? <p>Loading...</p> : (
            <table className="table table-striped table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>S NO.</th>
                  <th>Complaint Type</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {complaints.length>0?complaints.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td className="fw-semibold">{item.cmpId?.name}</td> {/* populate se name aayega */}
                    <td>{item.description}</td>
                    <td><span className={`badge bg-${item.cmpStatus === 'close' ? 'success' : item.cmpStatus === 'pending' ? 'warning' : 'secondary'}`}>{item.cmpStatus}</span></td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">No complaints found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default MyComplaint;