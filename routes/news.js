const express = require('express');
const router = express.Router();
const User = require('../models/News');

router.get('/latest', async(req,res)=>{ // shows the news registered ordered by date created)
    try {
        
        console.log("OK");
        res.json({msg: "Latest news loading..."});
    } catch (error) {
        // next(error);
    }
})

module.exports = router;