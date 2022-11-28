import React from 'react'
import { DataContest } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataContestPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataContest />
      </div>
    </>
  )
}

export default DataContestPage