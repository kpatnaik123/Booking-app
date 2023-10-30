import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import './Bookingscreen.css';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';


function Bookingscreen({}) {
    const [restaurant,setRestaurant]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();
    const {restaurantid}=useParams();  
    const user=JSON.parse(localStorage.getItem('currentuser'));
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
        username:JSON.parse(localStorage.getItem('currentuser')).name,
        userid:JSON.parse(localStorage.getItem('currentuser'))._id,
        
      }
      try{
        setLoading(true);
        const result=await axios.post('/api/bookings/booktable',bookingDetails);
        setLoading(false);
        Swal.fire("Congratulations","Your Booking is successful","success").then(result=>{
          window.location.href='/profile'
        });
      }
      catch(error){
        setLoading(false);
        Swal.fire("Oops","Something went wrong","error");
      }
    }
  
  return (
    <>
    <Navbar/>
    <div className='m-5'>
      {loading? <Loader/> : error ? <Error/> :(
        <div className='row justify-content-center mt-5 bs'>
           <p className='heading1'>{restaurant.name}</p>
          <div className='col-md-5'>
           
            <img className='booking-image' src={restaurant.imageURLs[1]} alt="restaurant-image"/>
          </div>
          <div className='col-md-5' >
            <div>
              <h6>Booking Details</h6>
              <hr/>
              <p className='bold'>Name:<span className='value'>{user.name}</span></p>
              <p className='bold'>Email: <span className='value'>{user.email}</span></p>
              <p className='bold'>Max Count: <span className='value'>{restaurant.maxCount}</span></p>
              <p className='bold'>Rating: <span className='value'>{restaurant.rating}</span></p>
              <p className='bold'> <span className='value'>Confirm your booking by clicking the Button below</span></p>

            </div>        
            <div>
             <button className='btn btn-primary' onClick={onToken}>Book Now</button>
            </div>

          </div>
        </div>
      )}
    </div> 
    </>
  )
}

export default Bookingscreen
