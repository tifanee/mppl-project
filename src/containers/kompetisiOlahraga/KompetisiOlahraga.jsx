import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import './kompetisiOlahraga.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'
import { tes1, tes2, tes3, tes4, tes5, tes6, tes7, tes8, tes9} from '../../assets/tes/imports'

const olahragaData = [
  {
    olahragaImage: tes1,
    olahragaName: 'Basket'
  },
  {
    olahragaImage: tes2,
    olahragaName: 'Futsal'
  },
  {
    olahragaImage: tes3,
    olahragaName: 'Bulu Tangkis'
  },
  {
    olahragaImage: tes4,
    olahragaName: 'Olahraga 4'
  },
  {
    olahragaImage: tes5,
    olahragaName: 'Olahraga 5'
  },
  {
    olahragaImage: tes6,
    olahragaName: 'Olahraga 6'
  },
  {
    olahragaImage: tes7,
    olahragaName: 'Olahraga 7'
  },
  {
    olahragaImage: tes8,
    olahragaName: 'Olahraga 8'
  },
  {
    olahragaImage: tes9,
    olahragaName: 'Olahraga 9'
  }
]

const KompetisiOlahraga = ({ getListTag }) => {

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
            <h1>OLAHRAGA</h1>
        </div>
        <div className='spirit__kompetisi-container'>
          <Slider {...settings}>
            {olahragaData.map((item, index) => (
              <List 
                listImage={item.olahragaImage} 
                listName={item.olahragaName} 
                listPropTag={setListTag}
                key={item.olahragaName}
              />
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default KompetisiOlahraga