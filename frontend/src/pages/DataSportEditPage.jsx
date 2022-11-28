import React from 'react'
import { SportDataEdit } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataSportEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <SportDataEdit />
      </div>
    </>
  )
}

export default DataSportEditPage