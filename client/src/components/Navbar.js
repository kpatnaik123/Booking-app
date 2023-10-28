import React from 'react'
import './Navbar.css';
function Navbar() {
  const user1=JSON.parse(localStorage.getItem('currentuser'));
  function logout(){
    localStorage.removeItem('currentuser');
    window.location.href='/login'
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">Campus Eats</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {user1!=null ? <>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle dropBorder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user"></i>    {user1.name}
                    </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/home">Bookings</a></li>
                            <li><a className="dropdown-item" href="/" onClick={logout}>Logout</a></li>
                        </ul>


                </div>
                 </>
                :(<>
                <li className="nav-item active">
                    <a className="nav-link" href="/register">
                        Register 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">
                        Login
                    </a>
                </li>
                </>)
            }
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
