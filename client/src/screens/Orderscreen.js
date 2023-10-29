import React,{useState,useEffect} from 'react'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Navbar from '../components/Navbar';
import Order from '../components/Order';
function Orderscreen() {
 
  const [restaurants,setRestaurants]=useState(0);
  const [loading,setLoading]=useState();
  const [error,setError]=useState();
  
  useEffect(() =>{
    async function fetchData(){
      try{
        setLoading(true);
        const data=(await axios.get('/api/restaurants/getallrestaurants')).data;
        setRestaurants(data);
        setLoading(false);
      }
      catch(error){
        setError(true);
        console.log(error.response.data)
        setLoading(false);
      }
    }
    fetchData();

  },[])
    
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className='row justify-content-center mt-5 '>
        {
        loading ? (<Loader/>)
        : restaurants.length>1?
        (restaurants?.map((res)=>{
          return <div className='col-md-9 mt-2'>
            <Order res={res}/>
          </div>
          }
        )
        )
        : (<Error message={'Something went wrong,please try again later'}/>)
        }
      </div>
    </div>
    </>
  )
}

export default Orderscreen