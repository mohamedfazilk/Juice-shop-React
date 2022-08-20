import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to='/'>
          <img src={logo} alt="logo" className="logo"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar