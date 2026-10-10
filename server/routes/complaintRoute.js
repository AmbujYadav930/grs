
const express = require('express');
const routes = express.Router();
const Complaint = require('../models/Complaint') // 2. Complaints -> Complaint

// ============ MIDDLEWARE ============
const adminOnly = (req, res, next) => {
  const userId = req.headers.userid; // header se user nikal lo
  if(userId !== 'admin_id_yaha_dalo') return res.status(403).json({msg: "Admin access only"}); // temp check
  next();
}

// ============ STUDENT ROUTES ============

// 1. POST /api/complaint/add - New complaint
routes.post('/add', async(req, res) => {
  try {
    const { cmpId, description } = req.body;
    const userId = req.headers.userid; // 1. header se lo

    if(!userId) return res.status(401).json({msg: "UserId missing"});
    if(!cmpId || !description) return res.status(400).json({msg: "All fields required"});

    const newComplaint = new Complaint({ // 2. Complaint
      userId: userId, // 1. userId save karo
      cmpId: cmpId, 
      description: description,
      cmpStatus: 'notProcessed', // default
      status: 'active'
    });
    
    await newComplaint.save();
    res.json({msg: "Complaint submitted successfully"});
  } catch (err) {
    res.status(500).json({msg: err.message}); // 5. err.message sahi kiya
  }
});

// 2. GET /api/complaint/my - Student ke apne complaints
routes.get('/my', async(req, res) => {
  try {
    const userId = req.headers.userid; // 3. header se lo
    if(!userId) return res.status(401).json({msg: "UserId missing"});

    const complaints = await Complaint.find({ 
      userId: userId, // 3. khali nahi
      status: 'active'
    })
    .populate('cmpId', 'name') // ComplaintType name
    .sort({ createdAt: -1 });
    
    res.json(complaints);
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
});

// 3. GET /api/complaint/show/:cmpStatus - Filter: pending/close/notProcessed
routes.get('/show/:cmpStatus', async(req, res) => {
  try {
    const userId = req.headers.userid;
    const complaints = await Complaint.find({ 
      userId: userId, // 3. req.user.id ki jagah header
      status: 'active',
      cmpStatus: req.params.cmpStatus
    }).populate('cmpId', 'name');
    
    res.json(complaints);
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
});

// ============ ADMIN ROUTES ============

// 4. GET /api/complaint/all - All complaints for admin
routes.get('/all', async(req, res) => {
  try {
    const { cmpStatus } = req.query; 
    let filter = { status: 'active' };
    if(cmpStatus) filter.cmpStatus = cmpStatus;

    const complaints = await Complaint.find(filter)
      .populate('userId', 'name email fatherName gender')
      .populate('cmpId', 'name')
      .sort({ createdAt: -1 });
    
    res.json(complaints);
  } catch (err) {
    res.status(500).json({msg: err.message});
  }
});

// 5. GET /api/complaint/stats - Dashboard cards ke liye
routes.get('/stats', adminOnly, async(req, res) => {
  try {
    const total = await Complaint.countDocuments({ status: 'active' });
    const notProcessed = await Complaint.countDocuments({ status: 'active', cmpStatus: 'notProcessed' });
    const pending = await Complaint.countDocuments({ status: 'active', cmpStatus: 'pending' });
    const close = await Complaint.countDocuments({ status: 'active', cmpStatus: 'close' });
    
    res.json({ total, notProcessed, pending, close });
  } catch (err) {
    res.status(500).json({msg: err.message});
  }
});

// 6. PUT /api/complaint/update/:id - Admin status update
routes.put('/update/:id', async(req, res) => {
  try {
    const { cmpStatus } = req.body; 
    
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { cmpStatus },
      { new: true }
    ).populate('userId', 'name email');
    
    if(!complaint) return res.status(404).json({msg: "Complaint not found"});
    
    res.json({msg: "Status updated", complaint});
  } catch (err) {
    res.status(500).json({msg: err.message});
  }
});

// 7. DELETE /api/complaint/:id - Soft delete
routes.delete('/:id', adminOnly, async(req, res) => {
  try {
    await Complaint.findByIdAndUpdate(req.params.id, { status: 'delete' });
    res.json({msg: "Complaint deleted"});
  } catch (err) {
    res.status(500).json({msg: err.message});
  }
});

module.exports = routes;