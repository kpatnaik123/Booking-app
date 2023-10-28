const express=require('express');
const router=express.Router();
const menuModel=require('../models/menu');

router.get('/getmenu',async(req,res)=>{
    try{
        const menu=await restaurantModel.find({})
        return res.json(menu);
    }
    catch(error){
        return res.status(400).json({message:error});
    }   
})

module.exports=router;