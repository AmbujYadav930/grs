import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  console.log(data);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post("http://localhost:5000/api/admin/login", data);
    if (res.data.msg == "success") {
      window.alert("Login Successfully");
      localStorage.setItem("adminId", res.data.adminId);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {
      window.alert(res.data.msg);
    }}catch(er){
      console.log(er)
      console.log("server Error")
    }

  };
  return (
    <div>
      <div className="admin-wrapper d-flex justify-content-center align-items-center min-vh-100">
        <div className="admin-card">
          {/* Header */}
          <div className="admin-header text-center text-white p-4">
            <div className="shield-icon mb-2">
              <i className="bi bi-shield-lock-fill"></i>
            </div>
            <h3 className="fw-bold mb-1">Admin Portal</h3>
            <p className="small mb-0 opacity-75">
              LNM University Grievance Redressal System
            </p>
          </div>

          {/* Body */}
          <div className="admin-body bg-white p-4">
            <div className="text-center mb-3">
              <span className="badge bg-light text-primary">
                <i className="bi bi-lock-fill me-1"></i> RESTRICTED ACCESS
              </span>
            </div>

            <form action="" method="POST" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Admin Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="admin@university.edu"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter admin password"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-admin w-100 fw-bold">
                <i className="bi bi-box-arrow-in-right me-2"></i> Sign In as
                Admin
              </button>
            </form>

            <div className="text-center mt-3">
              <a to="/forgot" className="small text-decoration-none">
                Forgot password?
              </a>
              <span className="mx-2 text-muted">
                •{" "}
                <a to="/" className="small text-decoration-none">
                  Back to Home
                </a>{" "}
              </span>
            </div>

            <p className="text-center text-muted small mt-4 mb-0">
              © 2024 LNM University • Admin access is logged and monitored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
