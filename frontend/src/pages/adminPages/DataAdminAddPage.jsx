import React from 'react'
import { AdminDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataAdminAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <AdminDataAdd />
      </div>
    </>
  )
}

export default DataAdminAddPage