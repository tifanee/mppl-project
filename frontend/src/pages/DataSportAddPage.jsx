import React from 'react'
import { SportDataAdd } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataSportAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <SportDataAdd />
      </div>
    </>
  )
}

export default DataSportAddPage