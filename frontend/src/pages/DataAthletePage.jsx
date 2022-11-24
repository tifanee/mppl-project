import React from 'react'
import { DataAthlete } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataAthletePage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataAthlete />
      </div>
    </>
  )
}

export default DataAthletePage