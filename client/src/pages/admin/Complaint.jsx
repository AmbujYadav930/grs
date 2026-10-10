import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
const Complaint = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });
  const [mode, setEditMode] = useState(null);
  const [editId, setEditId] = useState(null);

  const [complaint, setComplaint] = useState([]);
  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode) {
        const res = await axios.put(
          `http://localhost:5000/api/complaintType/${editId}`,
          data,
        );
        alert(res.data.msg);
        setEditMode(false);

        setData({
          name: "",
          description: "",
        });
        handlefetch();
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/complaintType/register",
          data,
        );

        console.log(res);
        window.alert("complaint registerd");
        handlefetch();
      }
    } catch (er) {
      console.log(er);
      window.alert("Sorry Try Again");
    }
  };
  // fetch data

  const handlefetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaintType/show");
      console.log(res.data.ComplaintType);
      setComplaint(res.data.ComplaintType);
    } catch (er) {
      console.log(er);
    }
    console.log(data);
  };
  useEffect(() => {
    handlefetch();
  }, []);

  // Edit button functionality

  const handleEdit = (a) => {
    console.log(a);
    setData({
      name: a.name,
      description: a.description,
    });

    setEditMode(true);
    setEditId(a._id);
    handlefetch();
  };
  console.log(data);

  const handleDelete = async (a) => {
    const res = await axios.delete(`http://localhost:5000/api/complaintType/${a}`);
    alert(res.data.msg);
    handlefetch();
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
        {/*complaint box started*/}
        <div className="row">
          <div className="col-sm-12 me-5 ">
            <div className="card complaint-card shadow-sm border-0 rounded-4 ">
              <div className="card-body">
                <h5 className="card-title text-primary text-center fw-bold fs-3">
                  Add Complaint Type{" "}
                </h5>
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="d-flex-column">
                    <label
                      className="mb-2 col-sm-12 fw-semibold fs-5 text-muted mt-3"
                      for="inputcomplaint"
                    >
                      Complaint Type
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name" value={data.name}
                    onChange={handleChange}
                    placeholder="Enter Complaint Type"
                    className="form-control border-0  mb-2 w-100 text-muted py-2 fs-4"
                  />

                  <label
                    className="mb-2 col-sm-12 text-muted fw-semibold"
                    for="inputCollege"
                  >
                    Description
                  </label>

                  <textarea
                    type="text" value={data.description}
                    className=" form-control
                mb-3 col-sm-12"
                    name="description"
                    onChange={handleChange}
                  ></textarea>

                  <div className="d-grid gap-2 d-md-block text-center">
                    <button
                      className="btn btn-primary col-sm-6 border-0 rounded-5 fw-bold fs-5"
                      type="submit"
                      fs-5
                    >
                      Save Type
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* complaint box ended ended */}

        {/*Registered complaints Started  */}
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-sm-10">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="text-muted fw-semibold mb-5">Complaint Type</h5>

              {/*DropDown start */}

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <select
                    className="form-select  form-select-shadow-lg rounded "
                    style={{ width: "80px" }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>

                  <span>enteries per page</span>
                </div>

                <input
                  type="text"
                  className="form-control form-control-sm me-2"
                  placeholder="Search records..."
                  style={{ width: "200px" }}
                />
              </div>

              {/*DropDown Ended*/}

              <table className="table">
                <thead className="table-light f-small">
                  <tr>
                    <th>
                      S.No{" "}
                      <div className="btn-group-vertical mb-4" role="group">
                        <div className="btn-group dropup" role="group">
                          <button
                            type="button"
                            className="btn dropdown-toggle border-0 "
                            data-bs-toggle="dropdown"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                        <div className="btn-group" role="group border-0">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                      </div>{" "}
                    </th>
                    <th>
                      COMPLAINT NAME{" "}
                      <div className="btn-group-vertical mb-4" role="group">
                        <div className="btn-group dropup" role="group">
                          <button
                            type="button"
                            className="btn dropdown-toggle border-0 "
                            data-bs-toggle="dropdown"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                        <div className="btn-group" role="group border-0">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                      </div>{" "}
                    </th>
                    <th>
                      Description{" "}
                      <div className="btn-group-vertical mb-4" role="group">
                        <div className="btn-group dropup" role="group">
                          <button
                            type="button"
                            className="btn dropdown-toggle border-0 "
                            data-bs-toggle="dropdown"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                        <div className="btn-group" role="group border-0">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                      </div>{" "}
                    </th>
                    <th>
                      STATUS{" "}
                      <div className="btn-group-vertical mb-4" role="group">
                        <div className="btn-group dropup" role="group">
                          <button
                            type="button"
                            className="btn dropdown-toggle border-0 "
                            data-bs-toggle="dropdown"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                        <div className="btn-group" role="group border-0">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                      </div>{" "}
                    </th>

                    <th>
                      ACTION{" "}
                      <div className="btn-group-vertical mb-4" role="group">
                        <div className="btn-group dropup" role="group">
                          <button
                            type="button"
                            className="btn dropdown-toggle border-0 "
                            data-bs-toggle="dropdown"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                        <div className="btn-group" role="group border-0">
                          <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ height: "10px" }}
                          ></button>
                        </div>
                      </div>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {complaint.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.status}</td>

                      <td>

                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1" onClick={() => { handleEdit(item) }}>
                            <FiEdit size={14} /> Edit
                          </button>
                          <button className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1" onClick={() => {
                            handleDelete(item._id)
                          }}>
                            <FiTrash2 size={14} /> Delete
                          </button>
                        </div>


                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="d-flex justify-content-between align-items-center mt-5 ">
                <span>Showing to of entry</span>

                {/*pagination */}
                <div className="btn-group w-10">
                  <button className="btn btn-sm btn-outline-secondary">
                    «
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    ‹
                  </button>
                  <button className="btn btn-sm btn-primary">1</button>
                  <button className="btn btn-sm btn-outline-secondary">
                    ›
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Registered complaints Ended */}
    </>
  );
};

export default Complaint;
