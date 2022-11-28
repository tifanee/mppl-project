import React from 'react'
import './spiritTable.css'

const TableArtist = ({data}) => {
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
            <p>{data.image}</p>
        </div>
        <div className='content__center'>
            <p>{data.department}</p>
        </div>
        <div className='content__center'>
            <p>{data.batch}</p>
        </div>
        <div className='content__center'>
            <p>{data.artist_in}</p>
        </div>
    </div>
  )
}

export default TableArtist