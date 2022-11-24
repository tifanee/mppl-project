import React from 'react'
import './spiritTable.css'

const TableSportTeam = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.department}</p>
        </div>
        <div className='content__center'>
            <p>{data.sport_type}</p>
        </div>
        <div className='content__center'>
            <p>tes</p>
        </div>
    </div>
  )
}

export default TableSportTeam