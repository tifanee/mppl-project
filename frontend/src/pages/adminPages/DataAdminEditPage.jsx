import React from 'react'
import { AdminDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataAdminEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <AdminDataEdit />
      </div>
    </>
  )
}

export default DataAdminEditPage