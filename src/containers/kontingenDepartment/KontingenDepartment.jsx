import React, { useState, useEffect } from 'react'

import Slider from 'react-slick'

import './kontingenDepartment.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../../components/department/imports'

const departmentData = [
    {
      departmentImage: g1,
      departmentKey: 'G1',
      departmentName: 'Statistika'
    },
    {
      departmentImage: g2,
      departmentKey: 'G2',
      departmentName: 'GFM'
    },
    {
      departmentImage: g3,
      departmentKey: 'G3',
      departmentName: 'Biologi'
    },
    {
      departmentImage: g4,
      departmentKey: 'G4',
      departmentName: 'Kimia'
    },
    {
      departmentImage: g5,
      departmentKey: 'G5',
      departmentName: 'Matematika'
    },
    {
      departmentImage: g6,
      departmentKey: 'G6',
      departmentName: 'Ilmu Komputer'
    },
    {
      departmentImage: g7,
      departmentKey: 'G7',
      departmentName: 'Fisika'
    },
    {
      departmentImage: g8,
      departmentKey: 'G8',
      departmentName: 'Biokimia'
    },
]

const KontingenDepartment = ({ getListTag }) => {
    const [listTag, setListTag] = useState('')
  
    useEffect(() => {
      getListTag(listTag)
    }, [getListTag, listTag])
  
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
              {departmentData.map((item, index) => (
                <List 
                  listImage={item.departmentImage} 
                  listName={item.departmentName} 
                  listPropTag={setListTag}
                  key={item.departmentKey}
                />
              ))}
            </Slider>
          </div>
      </div>
    )
}

export default KontingenDepartment