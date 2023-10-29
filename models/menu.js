const mongoose =require('mongoose');
const mongooseDouble = require('mongoose-double');
const menuSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    cookTime:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    favorite:{
        type:Boolean,
        required:true
    },
    origins:[],
    stars:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    tags:[]

})

const menuModel=mongoose.model('menu',menuSchema);

module.exports=menuModel;