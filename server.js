const express=require('express');
const cors=require('cors');
const app=express();

const port=process.env.port||5000;

const dbConfig=require('./db');
const restaurantRoutes=require('./routes/restaurantRoute');
const userRoutes=require('./routes/userRoute');
const bookingsRoute=require('./routes/bookingsRoute');
const menuRoute=require('./routes/menuRoute');
const orderRoute=require('./routes/orderRoute');

app.use(cors());
app.use(express.json())
//endpoint for routes
app.use('/api/restaurants',restaurantRoutes);
app.use('/api/users',userRoutes);
app.use('/api/bookings',bookingsRoute);
app.use('/api/menu',menuRoute);
app.use('/api/order',orderRoute);


app.listen(port,()=>{
    console.log(`Node server has been started using nodemon at ${port} port`);
})