const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    c_type: {
        type: String,
        required: true
    },
    c_detail: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Registered"
    },
    assigned_to: {
        type: String,
		default: ""
    },
    feedback: {
        type: String,
		default: ""
    },
    resolved_on: {
        type: String,
		default: ""
    }

});

module.exports = Complaint = mongoose.model('Complaint', ComplaintSchema);