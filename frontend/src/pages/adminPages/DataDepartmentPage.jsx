import React from 'react'
import { DataDepartment } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataDepartmentPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
          <DataDepartment />
      </div>
    </>
  )
}

export default DataDepartmentPage