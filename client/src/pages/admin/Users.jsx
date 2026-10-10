import React, { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
  const [data, setData] = useState({
    name: "",
    father: "",
    gender: "",
    email: "",
    mobile: "",
    city: "",
    college: "",
    session: "",
  });
  const [mode, setEditMode] = useState(null);
  const [editId, setEditId] = useState(null);
  const [Management, setManagement] = useState([]);

  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode) {
        const res = await axios.put(
          `http://localhost:5000/api/user/${editId}`,
          data,
        );
        alert(res.data.msg);
        setEditMode(false);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/user/register",
          data,
        );
        console.log(res);
        window.alert("management registerd");
      }
      setData({
        name: "",
        father: "",
        gender: "",
        email: "",
        mobile: "",
        city: "",
        college: "",
        session: "",
      });
      handlefetch();
    } catch (er) {
      console.log(er);
      window.alert("Sorry Try Again");
    }
  };
  // fetch data

  const handlefetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/show");
      console.log(res.data);
      setManagement(res.data.Session);
    } catch (er) {
      console.log(er);
    }
  };
  useEffect(() => {
    handlefetch();
  }, []);

  // Edit button functionality

  const handleEdit = (a) => {
    console.log(a);
    setData({
      name: a.name,
      father: a.father,
      gender: a.gender,
      email: a.email,
      mobile: a.mobile,
      city: a.address,
      college: a.college,
      session: a.session,
      password: "",
    });

    setEditMode(true);
    setEditId(a._id);
    handlefetch();
  };
  console.log(data);

  const handleDelete = async (a) => {
    const res = await axios.delete(`http://localhost:5000/api/user/${a}`);
    alert(res.data.msg);
    handlefetch();
  };

  const handleView = async (a) => {
    const res = await axios.get(
      `http://localhost:5000/api/user/profile/${a._id}`,
    );
    alert(res.data.msg);
    handlefetch();
  };

  //     const handleBlock = async(id) => {
  //   try {
  //     const res = await axios.put(`http://localhost:5000/api/user/block/${id}`)
  //     alert(res.data.msg)
  //     handlefetch() // table refresh
  //   } catch(er) {
  //     console.error(er)
  //     alert("Error")
  //   }
  // }

  return (
    <>
      <div
        className="container-fluid p-4 bg-light"
        style={{ minHeight: "100vh" }}
      >
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="mb-4 fw-bold">User Log Management</h4>

            {/* Top Controls */}
            <div className="row mb-3 align-items-center">
              <div className="col-md-6 d-flex align-items-center gap-2">
                <select className="form-select" style={{ width: "80px" }}>
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
                  style={{ width: "250px" }}
                />
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>S NO.</th>
                    <th>NAME</th>
                    <th>FATHER NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>CITY</th>
                    <th>COLLEGE</th>
                    <th>SESSION</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {Management.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td className="fw-semibold">{item.name}</td>
                      <td> {item.father} </td>
                      <td className="text-capitalize">{item.gender}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.address}</td>
                      <td
                        style={{
                          maxWidth: "120px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.collegeId.name}
                      </td>
                      <td
                        style={{
                          maxWidth: "120px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.sessionId.name}
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-warning btn-sm">
                            Block
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                          >
                            <i className="bi bi-trash"></i>
                          </button>

                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                              handleView(item);
                            }}
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="row align-items-center">
              <div className="col-md-6">
                <span>Showing 1 to of entries</span>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end">
                <nav>
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <button className="page-link">{"<"}</button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">{">"}</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
