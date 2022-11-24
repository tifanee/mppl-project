import React from 'react'
import './spiritTable.css'

const TableMatch = ({data}) => {

  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.sport_name}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_name1}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_name2}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_image1}</p>
        </div>
        <div className='content__center'>
            <p>{data.dept_image2}</p>
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
        <div className='content__center'>
            <p>{data.score_result[0]} - {data.score_result[1]}</p>
        </div>
    </div>
  )
}

export default TableMatch