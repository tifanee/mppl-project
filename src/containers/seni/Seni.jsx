import React from 'react'
import Slider from 'react-slick'

import './seni.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { KometisiList } from '../../components/index'
import { tes1, tes2, tes3, tes4, tes5, tes6, tes7, tes8, tes9} from '../../assets/tes/imports'

const seniData = [
    {
        seniImage: tes1,
        seniName: 'Seni 1'
    },
    {
        seniImage: tes2,
        seniName: 'Seni 2'
    },
    {
        seniImage: tes3,
        seniName: 'Seni 3'
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
    },
    {
        seniImage: tes9,
        seniName: 'Seni 9'
    }
]

const Seni = () => {

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
                        <KometisiList kompetisiImage={item.seniImage} kompetisiName={item.seniName} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Seni