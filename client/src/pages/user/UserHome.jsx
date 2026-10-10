import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserHome = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    closed: 0
  });

  // API se complaint count lao
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/complaint/userStats/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cards = [
    {
      title: "MY COMPLAINTS",
      subtitle: "Total",
      count: stats.total,
      icon: "bi-people-fill",
      color: "primary",
      route: "/user/MyComplaint"
    },
    {
      title: "PENDING COMPLAINTS",
      subtitle: "Pending",
      count: stats.pending,
      icon: "bi-clock",
      color: "warning",
      route: "/user/pending"
    },
    {
      title: "CLOSED COMPLAINT",
      subtitle: "Closed",
      count: stats.closed,
      icon: "bi-check-circle-fill",
      color: "success",
      route: "/user/closed"
    }
  ];

  return (
    <div className="container-fluid">
      <h3 className="fw-bold mb-4">Dashboard Overview</h3>
      
      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card border-0 shadow-sm h-100">
              
              {/* Card Header */}
              <div className={`card-header bg-${card.color} text-white d-flex justify-content-between align-items-center`}>
                <span className="fw-semibold">{card.subtitle}</span>
                <span className="badge bg-white text-dark rounded-pill px-3">{card.count}</span>
              </div>

              {/* Card Body */}
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-uppercase mb-3">{card.title}</h5>
                  <div className={`text-${card.color} mb-3`}>
                    <i className={`bi ${card.icon} fs-1`}></i>
                  </div>
                </div>

                <button 
                  className={`btn btn-outline-${card.color} w-100`}
                  onClick={() => navigate(card.route)}
                >
                  Check <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHome;