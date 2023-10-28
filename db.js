const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();

var mongoURL=process.env.MONGO_URI

mongoose.connect(mongoURL,
    {useUnifiedTopology:true,useNewUrlParser:true});
var connection=mongoose.connection;

connection.on('error',()=>{
    console.log(`Error in database connection`);
})

connection.on('connected',()=>{
    console.log(`MongoDB database connected`);
})

module.exports=mongoose;