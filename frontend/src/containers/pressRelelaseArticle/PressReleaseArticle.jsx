import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './pressReleaseArticle.css'
import {tes1} from '../../assets/tes/imports'

const PressReleaseArticle = () => {

  const params = useParams()
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles= async () => {
    const response = await axios.get(`http://localhost:8000/api/articles/${params.d}`)
    setArticles(response.data)
  }
  
  return (
    <div className='spirit__content section__padding' id='P'>
      <div className='spirit__PR-card'>
        <div className='spirit__PR-image-article'>
          <img src={articles.cover_image} alt="" />
        </div>
        <div className='spirit__PR-title-article'>
          <h2>{articles.title}</h2>
        </div>
        <div className='spirit__PR-credit-date'>
          <div className='spirit__PR-credit'>
            <p>oleh</p>
            <p className='spirit__credit-name'>{articles.author}</p>
          </div>
          <div>
            <p>{articles.published_date}</p>
          </div>
        </div>
        <div className='spirit__PR-text'>
          <p>{articles.body}</p>
        </div>
      </div>
    </div>
  )
}

export default PressReleaseArticle