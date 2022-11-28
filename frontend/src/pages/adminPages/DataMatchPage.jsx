import React from 'react'
import { DataMatch } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataMatchPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataMatch />
      </div>
    </>
  )
}

export default DataMatchPage