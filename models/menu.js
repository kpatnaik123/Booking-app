const mongoose =require('mongoose');

const menuSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

const menuModel=mongoose.model('menu',menuSchema);

module.exports=menuModel;