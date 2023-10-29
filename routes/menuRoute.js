const express=require('express');
const router=express.Router();
const menuModel=require('../models/menu');

router.get('/getmenu',async(req,res)=>{
    try{
        const menu=await menuModel.find({})
        return res.json(menu);
    }
    catch(error){
        return res.status(400).json({message:error});
    }   
})

router.get(
    '/tags',(async (req, res) => {
      const tags = await menuModel.aggregate([
        {
          $unwind: '$tags',
        },
        {
          $group: {
            _id: '$tags',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: '$count',
          },
        },
      ]).sort({ count: -1 });
  
      const all = {
        name: 'All',
        count: await menuModel.countDocuments(),
      };
  
      tags.unshift(all);
  
      res.send(tags);
    })
  );

router.get(
    '/search/:searchTerm',
    (async (req, res) => {
      const { searchTerm } = req.params;
      const searchRegex = new RegExp(searchTerm, 'i');
  
      const menu = await menuModel.find({ name: { $regex: searchRegex } });
      res.send(menu);
    })
  );

router.get(
    '/tag/:tag',
    (async (req, res) => {
      const { tag } = req.params;
      const foods = await menuModel.find({ tags: tag });
      res.send(foods);
    })
  );
  
router.post(
    '/food/:foodId',
    (async (req, res) => {
      const { foodId } = req.params;
      const food = await menuModel.find(foodId);
      res.send(food);
    })
  );

//   router.get('/food/:foodId',async(req,res)=>{
//     const foodId=req.body.id;
//     console.log(foodId);
//     try{
//         const food=await menuModel.findOne({id:foodId});
//         console.log(food);
//         return res.send(food);
//     }
//     catch(error){
//         return res.status(400).json({message:error});
//     }   
// });

  


module.exports=router;