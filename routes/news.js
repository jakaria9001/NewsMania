const express = require('express');
const router = express.Router();
const News = require('../models/News');


// GET All
router.get('/latest', async(req,res)=>{ // shows the news registered ordered by date created)
    try {
        const news = await News.find({})
        if(!news){ 
            return res.status(400).json({
                success: false,
                msg: "Something went wrong"
            })
        }
		const total = await News.estimatedDocumentCount();
		res.set("x-total-count",total);
		
        res.status(200).json({
            success: true,
            count: news.length,
            allNews: news,
            msg: "All news fetced"
        })

    } catch (error) {
        next(error);
    }
})
// POST NEW
router.post('/latest', async(req,res)=>{ // shows the news registered ordered by date created)
    try {
        const newNews = await News.create({
            publisher: req.body.publisher,
            title: req.body.title,
            email: req.body.email,
            description: req.body.description,
            imgUrl: req.body.imgUrl,
            addedBy: req.user.id
        })
        if(!newNews){
            return res.status(400).json({
                success: false,
                msg: 'Something went wrong'
            })
        }
        res.status(200).json({
            success: true,
            newNews: newNews,
            msg: 'A new news published successfully'
        })
    } catch (error) {
        // next(error);
        console.log(error);
    }
})
module.exports = router;