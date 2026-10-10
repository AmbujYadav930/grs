import React from "react";

const AdminHome = () => {
  return (
    <>
      <h4 className="fw-bold">Dashboard Overview</h4>
      <p className="text-muted">
        Welcome back, Admin. here is what is happening today.
      </p>

      <div className="row g-4 mt-2">
        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary-subtle rounded-3 p-3 me-3">
                {" "}
                {/* bg-subtle -> bg-primary-subtle */}
                <i className="bi bi-people-fill fs-3 text-primary"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-primary">3</h4>
                <small className="text-muted">TOTAL USERS</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-danger-subtle rounded-3 p-3 me-3">
                <i className="bi bi-exclamation-circle-fill fs-3 text-danger"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-danger">0</h4>
                <small className="text-muted">NOT PROCESSED</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning-subtle rounded-3 p-3 me-3">
                <i className="bi bi-clock-fill fs-3 text-warning"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-warning">2</h4>
                <small className="text-muted">PENDING</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-success-subtle rounded-3 p-3 me-3">
                <i className="bi bi-check-circle-fill fs-3 text-success"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-success">1</h4>
                <small className="text-muted">CLOSED</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-info-subtle rounded-3 p-3 me-3">
                <i className="bi bi-bank2 fs-3 text-info"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-info">3</h4>
                <small className="text-muted">TOTAL COLLEGES</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-danger-subtle rounded-3 p-3 me-3">
                <i className="bi bi-slash-circle-fill fs-3 text-danger"></i>
              </div>
              <div>
                <h4 className="fw-bold mb-0 text-danger">0</h4>
                <small className="text-muted">BLOCKED USERS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
