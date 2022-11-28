import React from 'react'
import { ContestDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataContestAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ContestDataAdd />
      </div>
    </>
  )
}

export default DataContestAddPage