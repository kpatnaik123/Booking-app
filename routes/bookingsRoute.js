const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Restaurant = require("../models/restaurant");


router.post("/booktable", async (req, res) => {
  const { restaurant, username, userid } = req.body;

  try {
      const newbooking = new Booking({
        restaurant: restaurant.name,
        restaurantid: restaurant._id,
        username,
        userid,
        transactionId: "1234"
      });

      const booking = await newbooking.save();

      const restaurantTemp = await Restaurant.findOne({ _id: restaurant._id });
      restaurantTemp.currentBookings.push({
        bookingid: booking._id,
        username: username,
        userid: userid,
        status: booking.status
      });

      await restaurantTemp.save();
      res.send("Booking successful..")
  } catch (error) {
    return res.status(400).json({ error });
  }
});


router.post("/getbookingsbyuserid",async(req,res)=>{
  const userid=req.body.userid;
  try{
    const bookings=await Booking.find({userid:userid});
    res.send(bookings);
  }
  catch(error){
    return res.status(400).json({ error });
  }
})

module.exports = router;
