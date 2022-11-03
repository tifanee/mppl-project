import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='spirit__navbar'>
      <div className='spirit__navbar-logo'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='spirit__navbar-container'>
        <p><Link to="/kompetisi">Kompetisi</Link></p>
        <p><Link to="/kontingen">Kontingen</Link></p>
        <p><Link to='/klasemen'>Klasemen</Link></p>
        <p><Link to="/press-release">Press Release</Link></p>
        <p><Link to="/contact-us">Contact Us</Link></p>
      </div>
    </div>
  )
}

export default Navbar