import React from 'react'
import { MatchDataAdd } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataMatchAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <MatchDataAdd />
      </div>
    </>
  )
}

export default DataMatchAddPage