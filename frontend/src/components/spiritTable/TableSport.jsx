import React from 'react'
import './spiritTable.css'

const TableSport = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.sport_name}</p>
        </div>
        <div className='content__flex-start'>
            <p>{data.sport_image}</p>
        </div>
    </div>
  )
}

export default TableSport