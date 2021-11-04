const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    
    createdAt: {
        type: Date,
        default: Date.now()
    },
    publisher: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    trendRate: {
        type: Number
    }
});

module.exports = News = mongoose.model('News', NewsSchema);