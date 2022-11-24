import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './pressReleaseList.css'

import { PressReleaseCard } from '../../components/index'

const PressReleaseList = () => {
  
  const [articles, setArticle] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const response = await axios.get('http://localhost:8000/api/articles')
    setArticle(response.data)
  }

  return (
    <div className='spirit__content section__padding' id='pressReleaseList'>
      <div className='spirit__heading'>
        <h1>PRESS RELEASE</h1>
      </div>
      <div className='spirit__press-release-list'>
        {articles.map((data) => (
          <PressReleaseCard data={data} />
        ))}
      </div>
    </div>
  )
}

export default PressReleaseList