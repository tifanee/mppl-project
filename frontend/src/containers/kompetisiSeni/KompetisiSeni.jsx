import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'

import './kompetisiSeni.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'

const KompetisiSeni = ({ getListTag }) => {

    const [listTag, setListTag] = useState('')
  
    useEffect(() => {
      getListTag(listTag)
    }, [getListTag, listTag])

    const [arts, setArts] = useState([])

    useEffect(() => {
        getArts()
    }, [])

    const getArts = async () => {
        const response = await axios.get('http://localhost:8000/api/arts')
        setArts(response.data)
    }

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear'
    }

    return (
        <div className='spirit__content section__padding' id='seni'>
            <div className='spirit__heading'>
                <h1>SENI</h1>
            </div>
            <div className='spirit__kompetisi-container'>
                <Slider {...settings}>
                    {arts.map((item, index) => (
                        <List 
                            listImage={item.art_image} 
                            listName={item.art_name} 
                            listPropTag={setListTag}
                            key={item._id}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default KompetisiSeni