import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'
import './navbar.css'

const NavbarAdmin = () => {
  const authenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

  const navigate =useNavigate()

  const logout = () => {
      localStorage.clear()
      navigate('/admin/login')
  }

  return (
    <div className='spirit__navbar'>
      <div className='spirit__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='spirit__navbar-container'>
        <div className='spirit__dropdown'>
          <p>Kontingen</p>
          <div className='spirit__navbar-dropdown'>
            <Link to='/admin/department'><p>Departemen</p></Link>
            <Link to='/admin/sport-team'><p>Tim Olahraga</p></Link>
            <Link to='/admin/athlete'><p>Atlet</p></Link>
            <Link to='/admin/artist'><p>Artis</p></Link>
          </div>
        </div>
        <div className='spirit__dropdown'>
          <p>Kompetisi</p>
          <div className='spirit__navbar-dropdown'>
            <Link to='/admin/sport'><p>Olahraga</p></Link>
            <Link to='/admin/art'><p>Seni</p></Link>
          </div>
        </div>
        <div className='spirit__dropdown'>
        <p>Jadwal</p>
          <div className='spirit__navbar-dropdown'>
          <Link to='/admin/match'><p>Olahraga</p></Link>
            <Link to='/admin/contest'><p>Seni</p></Link>
          </div>
        </div>
        <Link to='/admin/article'><p>Artikel</p></Link>
        {authenticated.is_superAdmin && <Link to='/admin/admin'><p>Admin</p></Link>}
        <p onClick={logout}>Logout</p>
      </div>
    </div>
  )
}

export default NavbarAdmin