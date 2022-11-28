import React from 'react'
import { AthleteDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataAthleteEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <AthleteDataEdit />
      </div>
    </>
  )
}

export default DataAthleteEditPage