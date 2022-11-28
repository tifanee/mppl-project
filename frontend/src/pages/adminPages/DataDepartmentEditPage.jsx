import React from 'react'
import { DepartmentDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataDepartmentEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DepartmentDataEdit />
      </div>
    </>
  )
}

export default DataDepartmentEditPage