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
        <p><a href="#kompetisi">Kompetisi</a></p>
          <p><a href="#kontingen">Kontingen</a></p>
          <p><a href="#klasemen">Klasemen</a></p>
          <p><a href="#pressRelease">Press Release</a></p>
          <p><a href="#contactUs">Contact Us</a></p>
      </div>
    </div>
  )
}

export default Navbar