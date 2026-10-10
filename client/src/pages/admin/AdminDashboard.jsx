import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/adminlogin");
    }
  }, [navigate]);
  const handlelogout = () => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/adminlogin");
  };

  return (
    <div className="d-flex bg-light" style={{ height: "100vh" }}>
      {/* Sidebar Started */}
      <div
        className="adminSlidebar bg-dark text-white vh-100"
        style={{ width: "200px"}}
      >
        <div className="p-3 d-flex align-items-center">
          <div className="bg-primary rounded p-2 me-2">
            <i className="bi bi-bank fs-4 text-white"></i>
          </div>
          <div>
            <h6 className="slideheading mb-0 fw-bold text-white">
              LNM University
            </h6>
            <small className="text-white-50 admin_panel">Admin Panel</small>
          </div>
        </div>
        <hr className="text-light opacity-25 mx-3" />

        <ul className="menu list-unstyled px-2">
          <p className="menu-title  text-white-50  px-3 mb-2">MAIN</p>

          <li
            className="d-flex align-items-center px-3 py-2 rounded mb-1"
            style={{ backgroundColor: "#1e3a8a" }}
          >
            <Link to="/admin">
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </Link>
          </li>

          <p className="menu-title  text-white-50  px-3 mb-2 mt-4">
            MANAGEMENT
          </p>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <Link to="/admin/college">
              <i className="bi bi-building me-2"></i>
              College Management
            </Link>
          </li>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <Link to="/admin/session">
              <i className="bi bi-calendar3 me-2"></i>
              Session Management
            </Link>
          </li>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <Link to="/admin/complaint">
              <i className="bi bi-file-earmark-text me-2"></i>
              Complaints Type
            </Link>
          </li>

          <li>
            <div className="dropdown p-3">
              <button
                className="btn  dropdown-toggle border-0 bg-info"
                type="button"
                data-bs-toggle="dropdown"
              >
                Complaints
              </button>
              <ul className="dropdown-menu">
                <Link to="/admin/AllComplaints">
                  <li>
                    <i className="bi bi-file-earmark-text me-2"></i>
                    All Complaints
                  </li>
                </Link>
                <li>
                  <a className="dropdown-item" href="#">
                    Pending
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Not Proceed
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Not Proceed
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <p className="menu-title text-white-50  px-3 mb-2 mt-4">USERS</p>
          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <Link to="/admin/user">
              <i className="bi bi-people me-2"></i> {/* class -> className */}
              User Management
            </Link>
          </li>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <i className="bi bi-slash-circle me-2"></i>
            Blocked Users
          </li>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1 mt-4"> 
            <Link to="/admin/AdminDiscussion">
            <i className="bi bi-chat-dots me-2"></i>
            Discussion Forum
            </Link>
          </li>

          <p className="menu-title  text-white-50  px-3 mb-2 mt-4">ACCOUNT</p>

          <li className="d-flex align-items-center px-3 py-2 rounded mb-1">
            <i className="bi bi-lock me-2"></i>
            Change Password
          </li>

          <li
            className="d-flex align-items-center px-3 py-2 rounded mb-1"
            onClick={handlelogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </li>
        </ul>
      </div>
      {/* Sidebar Ended */}

      {/* Main content Started */}
      <div className="flex-grow-1">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary d-xxl-none me-2 list_button">
              <i className="bi bi-list list_Icon"></i>{" "}
              {/* class -> className */}
            </button>

            <h6 className="mb-0 fw-semibold">
              Admin Panel <small className="text-muted">/ dashboard</small>
            </h6>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-end">
              <div className="fw-semibold">04:02:03 PM</div>
              <small className="text-muted">Sat, 18 Jul</small>
            </div>

            <div
              className="adminIcon rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px" }}
            >
              <i className="bi bi-person-fill fs-5 text-white"></i>
            </div>
          </div>
        </div>
        {/* top bar ended */}

        {/* Dashboard body */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      {/* main content ended*/}
    </div>
  );
};

export default AdminDashboard;

