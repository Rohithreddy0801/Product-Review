const express = require('express')
const router = express.Router()
const { Reviews } = require('../models')

router.get("/see-review",async(req,res)=>{
    const allReviews = await Reviews.findAll();
    res.json(allReviews);
})

router.post("/product-reviews",async(req,res)=>{
    try{
        const prodReviews = await Reviews.findAll({where:{product_name:req.body.product_name}});
        res.json(prodReviews);
    }catch(err){
        res.status(400).json({"status":false,"message":err});
    }
})

router.post("/add-review", async (req,res)=> {

    const review = req.body;
    try{
        const savedRev = await Reviews.create(review);
        res.json({"status":true,"message":"New review of "+review.product_name+" has been posted!"});
    }catch(err){
        res.status(400).json({"status":false,"message":err});
    }
})

module.exports = router