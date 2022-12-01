import React from 'react'

import './klasemen.css'
import { Article2 } from '../../components'
import klasemenImage1 from '../../assets/klasemen.jpeg'

const klasemenData = [
  {
    text: 'Klasemen SPIRIT 2022 adalah sumber hasil perolehan medali dari setiap departemen di FMIPA IPB.',
    klasemenImage: klasemenImage1,
    contentLink: '/klasemen'
  }
]

const Klasemen = () => {
  return (
    <div className='spirit__content section__padding' id='klasemen'>
      <div className='spirit__heading'>
          <h1>KLASEMEN</h1>
      </div>
      {klasemenData.map((item, index) => (
        <div className='spirit__klasemen-article' key={item.contentLink}>
          <Article2 text={item.text} contentImage={item.klasemenImage} contentLink={item.contentLink} />
        </div>
      ))}
    </div>
  )
}

export default Klasemen