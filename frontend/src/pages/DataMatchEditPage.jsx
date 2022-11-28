import React from 'react'
import { MatchDataEdit } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataMatchEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
        <div className='spirit__content section__padding'>
            <MatchDataEdit />
        </div>
    </>
  )
}

export default DataMatchEditPage