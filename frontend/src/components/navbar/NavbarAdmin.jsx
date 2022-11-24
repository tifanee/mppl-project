import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './navbar.css'

const NavbarAdmin = () => {
    const navigate =useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/admin/login')
    }

  return (
    <div className='spirit__navbar'>
      <div className='spirit__navbar-logo'>
        <Link to='/admin'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='spirit__navbar-container'>
        <p>
            <a>Kontingen</a>
            <div className='spirit__navbar-dropdown'>
                <Link to='/admin/department'><p><a>Departemen</a></p></Link>
                <Link to='/admin/sport-team'><p><a>Tim Olahraga</a></p></Link>
                <Link to='/admin/athlete'><p><a>Atlet</a></p></Link>
            </div>
        </p>
        
        
        
        <Link to='/admin/sport'><p><a>Olahraga</a></p></Link>
        <Link to='/admin/match'><p><a>Pertandingan</a></p></Link>
        <Link to='/admin/press-release'><p><a>Artikel</a></p></Link>
        <p onClick={logout}><a>Logout</a></p>
      </div>
    </div>
  )
}

export default NavbarAdmin