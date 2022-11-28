import React from 'react'
import { DataAdmin } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataAdminPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataAdmin />
      </div>
    </>
  )
}

export default DataAdminPage