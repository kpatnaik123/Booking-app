const express=require('express');
const router=express.Router();
const restaurantModel=require('../models/restaurant');

router.get('/getallrestaurants',async(req,res)=>{
    try{
        const restaurants=await restaurantModel.find({})
        //return res.json({restaurants});
        return res.json(restaurants);
    }
    catch(error){
        return res.status(400).json({message:error});
    }   
})


router.post('/getrestaurantbyid',async(req,res)=>{
    const restaurantid=req.body.restaurantid;
    console.log(restaurantid);
    try{
        const restaurant=await restaurantModel.findOne({_id:restaurantid});
        console.log(restaurant);
        return res.send(restaurant);
    }
    catch(error){
        return res.status(400).json({message:error});
    }   
});

module.exports=router;