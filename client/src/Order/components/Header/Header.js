import React from 'react'
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
function Header() {
 const user=JSON.parse(localStorage.getItem('currentuser'));
 const cart={
    totalCount:10,
 }
 function logout(){
  localStorage.removeItem('currentuser');
  window.location.href='/login'
}
 return (
    <header className={classes.header}>
    <div className={classes.container}>
      <Link to="/" className={classes.logo}>
        CampusEats
      </Link>
      <nav>
        <ul>
          {user ? (
            <li className={classes.menu_container}>
              <i className="fa-solid fa-user" style={{color:'whitesmoke'}}></i><Link to="/profile">{user.name}</Link>
              <div className='dropdown'>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <a onClick={logout}>Logout</a>
                </div>  
              </div>
              
            </li>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <li>
            <Link to="/order/cart">
              Cart
              {cart.totalCount > 0 && (
                <span className={classes.cart_count}>{cart.totalCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
