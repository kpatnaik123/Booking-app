const express=require('express');
const router=express.Router();
const menuModel=require('../models/menu');

// router.post(
//     '/food/:foodId',
//     (async (req, res) => {
//       const { foodId } = req.params;
//       const food = await menuModel.findById(foodId);
//       res.send(food);
//     })
//   );

router.get('/food/:foodId',async(req,res)=>{
    const foodId=req.params;
    console.log(foodId);
    try{
        const food=await menuModel.findById(foodId);
        console.log(food);
        return res.send(food);
    }
    catch(error){
        return res.status(400).json({message:error});
    }   
    });


  module.exports=router;