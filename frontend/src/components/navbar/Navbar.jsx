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
        <div className='spirit__dropdown'>
          <p>Kompetisi</p>
          <div className='spirit__navbar-dropdown'>
            <Link to='/kompetisi-olahraga'><p>Olahraga</p></Link>
            <Link to='/kompetisi-seni'><p>Seni</p></Link>
          </div>
        </div>
        <Link to='/kontingen'><p>Kontingen</p></Link>
        <Link to='/klasemen'><p>Klasemen</p></Link>
        <Link to='/press-release'><p>Press Release</p></Link>
        <Link to='/contactUs'><p>Contact Us</p></Link>
      </div>
    </div>
  )
}

export default Navbar