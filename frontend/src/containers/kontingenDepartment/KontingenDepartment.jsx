import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Slider from 'react-slick'

import './kontingenDepartment.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'

const KontingenDepartment = ({ getListTag }) => {
    const [listTag, setListTag] = useState('')
  
    useEffect(() => {
      getListTag(listTag)
    }, [getListTag, listTag])

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        getDepartments()
    }, [])

    const getDepartments = async () => {
      const response = await axios.get('http://localhost:8000/api/departments')
      setDepartments(response.data)
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
              <h1>KONTINGEN</h1>
          </div>
          <div className='spirit__kompetisi-container'>
            <Slider {...settings}>
              {departments.map((item, index) => (
                <List 
                  listImage={item.dept_image} 
                  listName={item.dept_name} 
                  listPropTag={setListTag}
                  key={item.dept_code}
                />
              ))}
            </Slider>
          </div>
      </div>
    )
}

export default KontingenDepartment