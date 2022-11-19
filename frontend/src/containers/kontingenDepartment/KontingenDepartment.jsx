import React, { useState, useEffect } from 'react'

import Slider from 'react-slick'

import './kontingenDepartment.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'
import { tes1, tes2, tes3, tes4, tes5, tes6, tes7, tes8} from '../../assets/tes/imports'

const departmentData = [
    {
      departmentImage: tes1,
      departmentKey: 'G1',
      departmentName: 'Statistika'
    },
    {
      departmentImage: tes2,
      departmentKey: 'G2',
      departmentName: 'GFM'
    },
    {
      departmentImage: tes3,
      departmentKey: 'G3',
      departmentName: 'Biologi'
    },
    {
      departmentImage: tes4,
      departmentKey: 'G4',
      departmentName: 'Kimia'
    },
    {
      departmentImage: tes5,
      departmentKey: 'G5',
      departmentName: 'Matematika'
    },
    {
      departmentImage: tes6,
      departmentKey: 'G6',
      departmentName: 'Ilmu Komputer'
    },
    {
      departmentImage: tes7,
      departmentKey: 'G7',
      departmentName: 'Fisika'
    },
    {
      departmentImage: tes8,
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