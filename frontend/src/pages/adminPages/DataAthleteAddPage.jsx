import React from 'react'
import { AthleteDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataAthleteAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <AthleteDataAdd />
      </div>
    </>
  )
}

export default DataAthleteAddPage