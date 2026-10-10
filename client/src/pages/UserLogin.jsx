import React, { useState } from "react";
import ImgLogo from "../assets/cms.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/userlogin/login",
        data,
      );

      if (res.data.msg === "login successfully") {
        alert("User login Successfully");
        localStorage.setItem("userId", res.data.UserLoginId);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("role", "user");
        navigate("/user");
      } else {
        alert(res.data.msg);
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        {/* LEFT SIDE - GRADIENT BACKGROUND */}
        <div
          className="col-lg-6 text-white d-none d-lg-flex flex-column justify-content-center align-items-center p-5"
          style={{
            background: "linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)",
          }}
        >
          <div className="text-center" style={{ maxWidth: "450px" }}>
            <div className="bg-light rounded-4 p-3 mb-4 d-inline-block shadow-lg">
              <i className="bi bi-bank2 fs-1 text-primary"></i>
            </div>

            <h2 className="fw-bold mb-3">Lalit Narayan Mithila University</h2>
            <p className="mb-4 opacity-75">
              Grievance Redressal System — Submit, track and resolve your
              complaints easily.
            </p>

            <div className="d-flex flex-column gap-3 text-start">
              <Feature
                icon="bi-file-earmark-richtext"
                text="Submit complaints online instantly"
              />
              <Feature icon="bi-clock" text="Track status in real time" />
              <Feature
                icon="bi-shield-shaded"
                text="Secure & confidential process"
              />
              <Feature icon="bi-chat" text="Discuss issues in the forum" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - WHITE FORM */}
        <div className="col-lg-6 d-flex flex-column justify-content-center p-4 p-md-5 bg-white">
          <div className="mx-auto w-100" style={{ maxWidth: "420px" }}>
            <img
              src={ImgLogo}
              alt="logo"
              style={{ width: "60px" }}
              className="mb-3"
            />
            <h1 className="fw-bold">Welcome back 👋</h1>
            <p className="text-muted mb-4">
              Sign in to your student account to continue..
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg bg-light"
                    name="password"
                    value={data.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                    ></i>
                  </button>
                </div>
              </div>

              <div className="d-grid mt-4">
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  disabled={loading}
                  style={{
                    background:
                      "linear-gradient(135deg, #3282b8 0%, #0f4c75 100%)",
                    border: "none",
                  }}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="mb-2">
                  Don't have an account?{" "}
                  <Link to="/register">Create an Account</Link>
                </p>
                <Link to="/" className="text-decoration-none">
                  <i className="bi bi-arrow-left"></i> Back To Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="d-flex align-items-center">
    <span className="badge rounded-circle bg-white bg-opacity-25 p-2 me-3">
      <i className={`bi ${icon} fs-5`}></i>
    </span>
    <small>{text}</small>
  </div>
);

export default UserLogin;
