const mongoose =require('mongoose');

const bookingSchema=mongoose.Schema({
    restaurant:{
        type:String,
        required:true
    },
    restaurantid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"booked"
    }


},{
    timestamps:true,
})

const bookingModel=mongoose.model('booking',bookingSchema);

module.exports=bookingModel;