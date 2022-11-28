import React from 'react'
import './spiritTable.css'

const TableDepartment = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_name}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_code}</p>
        </div>
        <div className='content__flex-start'>
            <p>{data.dept_image}</p>
        </div>
        <div className='content__center'>
            <p>{data.gold_medal_count}</p>
        </div>
        <div className='content__center'>
            <p>{data.silver_medal_count}</p>
        </div>
        <div className='content__center'>
            <p>{data.bronze_medal_count}</p>
        </div>
    </div>
  )
}

export default TableDepartment