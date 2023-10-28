const mongoose =require('mongoose');

const restaurantTableSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maxCount:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    imageURLs:[],
    currentBookings:[],
    rating:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

},{
    timestamps:true,
})

const restaurantModel=mongoose.model('restaurant',restaurantTableSchema);

module.exports=restaurantModel;