import React from 'react'
import './spiritTable.css'

const TableArt = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.art_name}</p>
        </div>
        <div className='content__flex-start'>
            <p>{data.art_image}</p>
        </div>
    </div>
  )
}

export default TableArt