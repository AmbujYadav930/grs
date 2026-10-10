import React, { useState, useEffect } from "react";
import axios from "axios";

import {useNavigate} from 'react-router-dom'

const AddComplaint = () => {
  const [complain, setComplain] = useState([]);
    const [formData, setFormData] = useState({
    cmpId: '',
    description: ''
  });
  const navigate = useNavigate();

  const handlefetch = async () => {
    try {
      const res1 = await axios.get(
        "http://localhost:5000/api/complaintType/active",
      );
      console.log(res1);

      setComplain(res1.data.ComplaintType || []);
    } catch (er) {
      console.error(er);
      console.log("Server Error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.cmpId || !formData.description.trim()){
      alert("please select type and enter description")
      return ;
    }
    try {
      const userId=localStorage.getItem('userId')
      const res = await axios.post(
        "http://localhost:5000/api/complaint/add", 
        formData ,{headers: {userid:userId}});
      alert(res.data.msg);
      setFormData({ cmpId: '', description: '' });
      navigate('/user/MyComplaint'); // submit ke baad my complaints pe bhej do
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
      console.log(err);
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <>
      <div className="add-complaint-wrapper">
        <div className="add-complaint-card">
          <h3 className="text-center mb-4">Add Complain</h3>

          <form  method="Post" onSubmit={handleSubmit}>
            {/* Select Complaint Type */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Select Complaint Type
              </label>
              <select className="form-select" name="cmpId" value={formData.cmpId} onChange={handleChange}>
                <option value="">--select complaint type--</option>
                {complain.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>

            {/* Enter Complaint */}
            <div className="mb-3">
              <label className="form-label fw-bold">Enter Your Complain</label>
              <textarea
                className="form-control"
                name="description" value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="please enter Your complain"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Submit Complain
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComplaint;
