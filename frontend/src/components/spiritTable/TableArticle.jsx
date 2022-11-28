import React from 'react'
import './spiritTable.css'

const TableArticle = ({data}) => {
  return (
    <div className='admin__actions'>
        <div className='content__flex-start'>
            <p>{data._id}</p>
        </div>
        <div className='content__center'>
            <p>{data.title}</p>
        </div>
        <div className='content__center'>
            <p>{data.author}</p>
        </div>
        <div className='content__center'>
            <p>{data.body}</p>
        </div>
        <div className='content__center'>
            <p>{data.cover_image}</p>
        </div>
        <div className='content__center'>
            <p>{String(data.is_published)}</p>
        </div>
        <div className='content__center'>
            <p>{data.created_date}</p>
        </div>
        <div className='content__center'>
            <p>{data.published_date}</p>
        </div>
    </div>
  )
}

export default TableArticle