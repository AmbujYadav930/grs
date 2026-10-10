import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role != "user") {
      navigate("/userlogin");
    }
  }, []);
  const handlelogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/userlogin");
  };

  return (
    <div className="d-flex bg-light" style={{ minHeight: "100vh" }}>
      {/* Sidebar Started */}
      <div
        className="text-white d-flex flex-column"
        style={{
          width: "240px",
          background: "linear-gradient(180deg, #0B1E2D 0%, #1F5F6F 100%)",
        }}
      >
        <div className="p-3 d-flex align-items-center">
          <div className="bg-primary rounded p-2 me-2">
            <i className="bi bi-bank fs-4 text-white"></i>
          </div>
          <div>
            <h6 className="mb-0 fw-bold text-white">LNM University</h6>
            <small className="text-white-50">Student Portal</small>
          </div>
        </div>
        <hr className="text-light opacity-25 mx-3" />

        <ul className="list-unstyled px-2 flex-grow-1">
          <p className="text-white-50 px-3 mb-2 small fw-semibold">MAIN</p>
          <SidebarItem
            to="/user"
            icon="bi-speedometer2"
            label="Dashboard"
            activePath={location.pathname}
          />

          <p className="text-white-50 px-3 mb-2 mt-4 small fw-semibold">
            COMPLAINTS
          </p>
          <SidebarItem
            to="/user/addComplaint"
            icon="bi-plus-circle"
            label="Add Complaint"
            activePath={location.pathname}
          />
          <SidebarItem
            to="/user/MyComplaint"
            icon="bi-list-ul"
            label="My Complaints"
            activePath={location.pathname}
          />
          <SidebarItem
            to=""
            icon="bi-clock"
            label="Pending"
            activePath={location.pathname}
          />
          <SidebarItem
            to=""
            icon="bi-check-circle"
            label="Closed"
            activePath={location.pathname}
          />

          <p className="text-white-50 px-3 mb-2 mt-4 small fw-semibold">
            COMMUNITY
          </p>
          <SidebarItem
            to="/user/discussForum"
            icon="bi-chat-dots"
            label="Discussion Forum"
            activePath={location.pathname}
          />

          <p className="text-white-50 px-3 mb-2 mt-4 small fw-semibold">
            ACCOUNT
          </p>
          <SidebarItem
            to="/user/updateProfile"
            icon="bi-person-gear"
            label="Update Profile"
            activePath={location.pathname}
          />
          <SidebarItem
            to=""
            icon="bi-lock"
            label="Change Password"
            activePath={location.pathname}
          />

          {/* Logout */}
          <li
            className="d-flex align-items-center px-3 py-2 rounded mb-1 text-danger"
            style={{ cursor: "pointer" }}
            onClick={handlelogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </li>
        </ul>
      </div>
      {/* Sidebar Ended */}

      {/* Main content Started */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary d-lg-none me-2">
              <i className="bi bi-list fs-4"></i>
            </button>
            <h6 className="mb-0 fw-semibold">
              Good Evening <small className="text-muted"></small>
            </h6>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-end">
              <div className="fw-semibold">
                {new Date().toLocaleTimeString()}
              </div>
              <small className="text-muted">{new Date().toDateString()}</small>
            </div>

            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px" }}
            >
              <i className="bi bi-person-fill fs-5 text-white"></i>
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-4 flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Reusable Sidebar Item with Link
const SidebarItem = ({ to, icon, label, activePath }) => {
  const isActive = activePath === to;
  return (
    <li className="mb-1">
      <Link
        to={to}
        className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none text-white ${
          isActive ? "bg-primary bg-opacity-50" : ""
        }`}
      >
        <i className={`bi ${icon} me-2`}></i>
        {label}
      </Link>
    </li>
  );
};

export default UserDashboard;
