import React from 'react'
import { Link } from 'react-router-dom'

import './article.css'

const Article = ({text, contentImage, contentLink}) => {
  return (
    <div className='spirit__article'>
        <div className='spirit__article-content_image'>
          <img src={contentImage} alt="content image" />
        </div>
        <div className='spirit__article-content_text2'>
          <p>{text}</p>
          <Link to={contentLink}>
            <button className='spirit__article-button' type='button'>Lihat selengkapnya</button>
          </Link>
        </div>
    </div>
  )
}

export default Article