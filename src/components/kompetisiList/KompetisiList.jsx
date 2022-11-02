import React from 'react'
import './kompetisiList.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const KompetisiList = ({ kompetisiImage, kompetisiName}) => {

  return (
    <div className='card'>
      <div className='card-content'>
        <img src={kompetisiImage} alt="tes" />
        <p>{kompetisiName}</p>
      </div>
    </div>
  )
}

export default KompetisiList