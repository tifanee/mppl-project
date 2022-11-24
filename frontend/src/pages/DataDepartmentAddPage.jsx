import React from 'react'
import { DepartmentDataAdd } from '../containers/index'
import { NavbarAdmin } from '../components/index'

const DataDepartmentAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DepartmentDataAdd />
      </div>
    </>
  )
}

export default DataDepartmentAddPage