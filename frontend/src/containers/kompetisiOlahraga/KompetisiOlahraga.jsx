import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'

import './kompetisiOlahraga.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'

const KompetisiOlahraga = ({ getListTag }) => {

  const [listTag, setListTag] = useState('')
  
  useEffect(() => {
    getListTag(listTag)
  }, [getListTag, listTag])

  const [sports, setSports] = useState([])

  useEffect(() => {
    getSports()
  }, [])

  const getSports = async () => {
    const response = await axios.get('http://localhost:8000/api/sports')
    setSports(response.data)
  }

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: 'linear'
  }

  return (
    <div className='spirit__content section__padding' id='olahraga'>
        <div className='spirit__heading'>
            <h1>OLAHRAGA</h1>
        </div>
        <div className='spirit__kompetisi-container'>
          <Slider {...settings}>
            {sports.map((item, index) => (
              <List 
                listImage={item.sport_image} 
                listName={item.sport_name} 
                listPropTag={setListTag}
                key={item._id}
              />
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default KompetisiOlahraga