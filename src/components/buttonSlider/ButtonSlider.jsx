import React from 'react'

import './buttonSlider.css'
import leftArrow from '../../assets/buttons/leftArrow.png'
import rightArrow from '../../assets/buttons/rightArrow.png'

const ButtonSlider = ({moveSlide, direction}) => {
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
        <img src={direction === 'next' ? rightArrow : leftArrow }/>
    </button>
  )
}

export default ButtonSlider