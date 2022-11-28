import React from 'react'
import { DataSport } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataSportPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataSport />
      </div>
    </>
  )
}

export default DataSportPage