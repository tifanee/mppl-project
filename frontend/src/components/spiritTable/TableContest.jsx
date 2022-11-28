import React from 'react'
import './spiritTable.css'

const TableContest = ({data}) => {

  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.art_name}</p>
        </div>
        <div className='content__center'>
            <p>{data.art_type}</p>
        </div>
        <div className='content__center'>
            <p>{data.location}</p>
        </div>
        <div className='content__center'>
            <p>{data.date}</p>
        </div>
        <div className='content__center'>
            <p>{data.day}</p>
        </div>
        <div className='content__center'>
            <p>{data.time}</p>
        </div>
        <div className='content__center'>
            <p>{String(data.is_finished)}</p>
        </div>
    </div>
  )
}

export default TableContest