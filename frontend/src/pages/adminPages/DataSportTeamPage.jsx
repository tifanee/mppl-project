import React from 'react'
import { DataSportTeam } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataSportTeamPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
          <DataSportTeam />
      </div>
    </>
  )
}

export default DataSportTeamPage