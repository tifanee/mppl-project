import React from 'react'
import './spiritTable.css'

const TableAdmin = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.name}</p>
        </div>
        <div className='content__center'>
            <p>{data.nim}</p>
        </div>
        <div className='content__center'>
            <p>{data.department}</p>
        </div>
        <div className='content__center'>
            <p>{data.batch}</p>
        </div>
        <div className='content__center'>
            <p>{data.email}</p>
        </div>
        <div className='content__flex-start'>
            <p>{data.password}</p>
        </div>
        <div className='content__center'>
            <p>{String(data.is_superAdmin)}</p>
        </div>
        <div className='content__center'>
            <p>{String(data.is_admin)}</p>
        </div>
    </div>
  )
}

export default TableAdmin