import React from 'react'

import './department.css'

const Department = ({ departmentImage, departmentKey, departmentName}) => {
  return (
    <div className='spirit__department'>
      <div className='spirit__department-image'>
        <img src={departmentImage} alt="Department Image" />
      </div>
      <div className='spirit__department-tag'>
        <p>{departmentKey}<br/>{departmentName}</p>
      </div>
    </div>
  )
}

export default Department