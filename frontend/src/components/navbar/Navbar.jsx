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
        <p>
          <a>Kompetisi</a>
          <div className='spirit__navbar-dropdown'>
            <Link to='/kompetisi-olahraga'><p><a>Olahraga</a></p></Link>
            <Link to='/kompetisi-seni'><p><a>Seni</a></p></Link>
          </div>
        </p>
        <Link to='/kontingen'><p><a>Kontingen</a></p></Link>
        <Link to='/klasemen'><p><a>Klasemen</a></p></Link>
        <Link to='/press-release'><p><a>Press Release</a></p></Link>
        <Link to='/contactUs'><p><a>Contact Us</a></p></Link>
      </div>
    </div>
  )
}

export default Navbar