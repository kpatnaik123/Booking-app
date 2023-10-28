import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import './Bookingscreen.css';
import StripeCheckout from 'react-stripe-checkout';
import Navbar from '../components/Navbar';


function Bookingscreen({}) {
    const [restaurant,setRestaurant]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();
    const {restaurantid}=useParams();
    const user=JSON.parse(localStorage.getItem('currentuser'));
    const totalamount=200;
    useEffect(() =>{
      async function fetchData(){
        try{
          setLoading(true);
          const data=(await axios.post('/api/restaurants/getrestaurantbyid',{restaurantid})).data;
          setRestaurant(data);
          setLoading(false);
        }
        catch(error){
          setError(true);
          console.log(error.response.data);
          setLoading(false);
        }
      }
      fetchData();
  
    },[])

  async function onToken(token){
      const bookingDetails={
        restaurant,
        token,
        totalamount,
        username:JSON.parse(localStorage.getItem('currentuser')).name,
        userid:JSON.parse(localStorage.getItem('currentuser'))._id,
        
      }
      try{
        const result=await axios.post('/api/bookings/booktable',bookingDetails);
      }
      catch(error){

      }
    }
  
  return (
    <>
    <Navbar/>
    <div className='m-5'>
      {loading? <Loader/> : error ? <Error/> :(
        <div className='row justify-content-center mt-5 bs'>
           <p className='heading1'>{restaurant.name}</p>
          <div className='col-md-6'>
           
            <img className='booking-image' src={restaurant.imageURLs[1]} alt="restaurant-image"/>
          </div>
          <div className='col-md-6' style={{textAlign:'right'}}>
            <div>
              <h6>Booking Details</h6>
              <hr/>
              <p className='bold'>Name:<span className='value'>{user.name}</span></p>
              <p style={{marginBottom:'50px'}}className='bold'>Max Count: <span className='value'>{restaurant.maxCount}</span></p>
            </div>

            <div className='m-2'>
              <h6>Amount</h6>
              <hr/>
              <span>Secure your reservation today with a  initial booking fee, which will be refunded later...</span>
            </div>
            
            <div>
            
              <StripeCheckout
              amount={totalamount*100}
              currency='INR'
              token={onToken}
              stripeKey="pk_test_51O3uh7SH6uoouDGLg6liiWAYhg9uZgOm6h3KqauDcPBxWohhP4BlpK7fB3UkLtR0U3DMZBbBmRoYeAHZgzZj3baf000l2yH3N4"
            >
                  <button className='btn btn-primary' onClick={onToken}>Pay Now</button>
            </StripeCheckout>

            </div>

          </div>
        </div>
      )}
    </div> 
    </>
  )
}

export default Bookingscreen
