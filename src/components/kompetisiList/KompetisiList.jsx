import React, { useState, useEffect } from 'react'
import './kompetisiList.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const KompetisiList = ({ kompetisiImage, kompetisiName, kompetisiPropTag}) => {

  const [kompetisiTag, setKompetisiTag] = useState({kompetisiName: ''})
  
  useEffect(() => {
    kompetisiPropTag(kompetisiTag)
  }, [kompetisiPropTag, kompetisiTag])

  return (
    <div className='card' onClick={() => setKompetisiTag({kompetisiName})}>
      <div className='card-content'>
        <img src={kompetisiImage} alt="tes" />
        <p>{kompetisiName}</p>
      </div>
    </div>
  )
}

export default KompetisiList