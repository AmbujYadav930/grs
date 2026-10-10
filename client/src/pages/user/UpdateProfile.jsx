import React from 'react'

const UpdateProfile = () => {
  return (
    <><div className="profile-wrapper">
      <div className="profile-card">
        
        {/* Header */}
        <div className="profile-header">
         <i className="bi bi-person-badge-fill" ></i>
          <div>
            <h4>My Profile</h4>
            <p>Manage your personal information</p>
          </div>
        </div>

        <form >
          {/* Profile Photo */}
          <div className="profile-photo-section">
            <p className="section-title">PROFILE PHOTO</p>
            <label className="upload-box">
                       <i className="bi bi-person-badge-fill text-primary" ></i>
              <span>Click to upload a new photo (JPG, PNG — max 5 MB)</span>
              <input type="file" hidden accept="image/*" />
            </label>
          </div>

          {/* Personal Info */}
          <p className="section-title">PERSONAL INFORMATION</p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Full Name</label>
              <input type="text" className="form-control" name="fullName"  />
            </div>
            <div className="col-md-6 mb-3">
              <label>Father's Name</label>
              <input type="text" className="form-control" name="fatherName"/>
            </div>
            <div className="col-md-6 mb-3">
              <label>Gender</label>
              <select className="form-select" name="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Date of Birth</label>
              <input type="date" className="form-control" name="dob" />
            </div>
          </div>

          {/* Contact */}
          <p className="section-title">CONTACT</p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Email (user only)</label>
              <input type="email" className="form-control" name="email"  />
            </div>
            <div className="col-md-6 mb-3">
              <label>Mobile</label>
              <input type="text" className="form-control"  />
            </div>
            <div className="col-md-6 mb-3">
              <label>Address</label>
              <input type="text" className="form-control" name="address"/>
            </div>
            <div className="col-md-6 mb-3">
              <label>City</label>
              <input type="text" className="form-control" name="city" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Pincode</label>
              <input type="text" className="form-control" name="pincode"  />
            </div>
          </div>

          {/* Academic */}
          <p className="section-title">ACADEMIC DETAILS (set during registration)</p>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label>Course</label>
              <input type="text" className="form-control" name="course" />
            </div>
            <div className="col-md-4 mb-3">
              <label>College</label>
              <input type="text" className="form-control" name="college"/>
            </div>
            <div className="col-md-4 mb-3">
              <label>Session</label>
              <input type="text" className="form-control" name="session"/>
            </div>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-save">
                       <i className="bi bi-person-badge-fill" ></i> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>

    

    
    
    </>
  )
}

export default UpdateProfile