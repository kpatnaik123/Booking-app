import React from 'react'
import { Link } from 'react-router-dom';
import './LandingScreen.css'
import Navbar from '../components/Navbar';

function LandingScreen() {
  return (
    <>
    <Navbar/>
    <div>
      <div className='row landing'>
        <div className='col-md-12 text-center'>
            <h2 style={{fontSize:'100px'}}>CampusEats</h2>
            <h1>Why wait? when you can take a Bite</h1>
            <Link to="/orderPage">
              <button className='btn btn-primary landingbtn'>Order Now</button>
            </Link>
            <Link to='/home'>
                <button className='btn btn-primary landingbtn'>Book Table</button>
            </Link>

            
        </div>  
      </div>
    </div>
    </>
  )
}

export default LandingScreen
