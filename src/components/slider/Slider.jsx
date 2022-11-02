import React, { useState } from 'react'
import './slider.css'
import sliderData from './sliderData'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='slider-container'>
            {sliderData.map((obj, index) => {
                return (
                    <div key={obj.sliderImage} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                        <img src={obj.sliderImage} />
                    </div>
                )
            })}

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider