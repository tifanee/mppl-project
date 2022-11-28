import React from 'react'
import { SportTeamDataAdd } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataSportTeamAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <SportTeamDataAdd />
      </div>
    </>
  )
}

export default DataSportTeamAddPage