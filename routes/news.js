const express = require('express');
const router = express.Router();
const User = require('../models/News');

router.get('/latest', async(req,res)=>{ // shows the news registered ordered by date created)
    try {
        
        console.log("OK");
        res.json({msg: "Lates coming"});
    } catch (error) {
        // next(error);
    }
})

// router.get('/specific/:id', async(req,res, next)=>{ // shows the complaints registered by all users)
//     try {
//         const complaint = await Complaint.find({})
//         if(!complaint){ 
//             return res.status(400).json({
//                 success: false,
//                 msg: "Something went wrong"
//             })
//         }
// 		const total = await Complaint.estimatedDocumentCount();
// 		res.set("x-total-count",total);
		
//         res.status(200).json({
//             success: true,
//             count: complaint.length,
//             complaints: complaint,
//             msg: "All complaints fetced"
//         })

//     } catch (error) {
//         next(error);
//     }
// })
module.exports = router;