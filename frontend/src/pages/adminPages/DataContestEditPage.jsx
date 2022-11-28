import React from 'react'
import { ContestDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataContestEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
        <div className='spirit__content section__padding'>
            <ContestDataEdit />
        </div>
    </>
  )
}

export default DataContestEditPage