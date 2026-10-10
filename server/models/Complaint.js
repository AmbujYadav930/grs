const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({ // yaha new lagana best practice hai
  cmpId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ComplaintType',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'active'
  },
  cmpStatus: {
    type: String,
    enum: ['notProcessed', 'pending', 'close'],
    default: 'notProcessed'
  }
}, {
  timestamps: true // ✅ s chhota karo
});

module.exports = mongoose.model("Complaint", complaintSchema) // "Complaint" singular rakho