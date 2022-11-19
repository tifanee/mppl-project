import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import './kompetisiSeni.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { List } from '../../components/index'
import { tes1, tes2, tes3, tes4, tes5, tes6, tes7, tes8} from '../../assets/tes/imports'

const seniData = [
    {
        seniImage: tes1,
        seniName: 'Poster'
    },
    {
        seniImage: tes2,
        seniName: 'Komik Strip'
    },
    {
        seniImage: tes3,
        seniName: 'Seni Lukis'
    },
    {
        seniImage: tes4,
        seniName: 'Seni 4'
    },
    {
        seniImage: tes5,
        seniName: 'Seni 5'
    },
    {
        seniImage: tes6,
        seniName: 'Seni 6'
    },
    {
        seniImage: tes7,
        seniName: 'Seni 7'
    },
    {
        seniImage: tes8,
        seniName: 'Seni 8'
    }
]

const KompetisiSeni = ({ getListTag }) => {

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
        <div className='spirit__content section__padding' id='seni'>
            <div className='spirit__heading'>
                <h1>SENI</h1>
            </div>
            <div className='spirit__kompetisi-container'>
                <Slider {...settings}>
                    {seniData.map((item, index) => (
                        <List 
                            listImage={item.seniImage} 
                            listName={item.seniName} 
                            listPropTag={setListTag}
                            key={item.seniName}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default KompetisiSeni