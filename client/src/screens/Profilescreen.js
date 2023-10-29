import React, { useEffect ,useState} from "react";
import { Tabs } from "antd";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loader from '../components/Loader';
function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  },[]);
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Profile ',
      children:            ( <div  className="bs">
      <h5>My Profile</h5>
      <br />
      <p><b>Name: </b> {user.name}</p>
      <p><b>Email:</b>  {user.email}</p>
      <p><b>isAdmin:</b>  {user.isAdmin ? "YES" : "NO"}</p>
    </div>)
    },
    {
      key: '2',
      label: 'Bookings',
      children: <MyBookings/>,
    },
    {
      key: '3',
      label: 'Orders',
      children: <MyOrders/>,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="ml-5 mt-3">
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>


    </>
  );
}

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const [bookings,setbookings]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  useEffect(() =>{
    async function fetchData(){
      try{
        setLoading(true);
        const data=(await (axios.post('/api/bookings/getbookingsbyuserid',{userid:user._id}))).data;
        setbookings(data);
        setLoading(false);
      }
      catch(error){
        setLoading(false);
        console.log(error.response.data);
        setError(error)
      }
    }
    fetchData();

  },[])
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
            {loading && <Loader/>}
            {bookings && (bookings.map(booking=>{
              return <div className="bs">
                        <h5>{booking.restaurant}</h5>
                        <p><b>Booking Id:</b> {booking._id}</p>
                        <p><b>Status:</b> {booking.status=='booked'?'CONFIRMED':'CANCELLED'}</p>
                      <div style={{alignItems:"text-right"}}>
                        <button className="btn btn-primary">CANCEL BOOKING</button>
                      </div>
                      </div>
            }))}
        </div>
      </div>
    </div>
  );
}

export function MyOrders() {
  return (
    <div>
      <h5 style={{ color: "black" }}>My Orders</h5>
    </div>
  );
}

export default Profilescreen;
