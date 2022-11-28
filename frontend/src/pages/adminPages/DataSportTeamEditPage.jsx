import React from 'react'
import { SportTeamDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataSportTeamEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
          <SportTeamDataEdit />
      </div>
    </>
  )
}

export default DataSportTeamEditPage