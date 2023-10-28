const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Restaurant = require("../models/restaurant");
const stripe = require("stripe")(
  "sk_test_51O3uh7SH6uoouDGLybMIWiZqOxEz5oyLJZuHN98Km3pldvSqmuhnhhJkfsnpTA7XRrg4JfkT1JUGcnLZXUSQEXkx00z0Qnuhum"
);
const { v4: uuidv4 } = require("uuid");

router.post("/booktable", async (req, res) => {
  const { restaurant, token, totalamount, username, userid } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const payment = await stripe.charges.create(
      {
        amount: totalamount * 100,
        customer: customer.id,
        currency: "inr",
        receipt_email: token.email
      },
      {
        idempotencyKey: uuidv4()
      }
    );
    if (payment) {
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
      res.send("booking successful..")
    }

    res.send("Payment Successful, Your table has been booked!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
