import React from 'react'

import './pressRelease.css'
import { Article } from '../../components'
import pressReleaseImage1 from '../../assets/pressRelease.jpeg'

const pressReleaseData = [
  {
    text: 'Rangkuman berita lengkap seputar pertandingan dan kompetisi di SPIRIT 2022.',
    pressReleaseImage: pressReleaseImage1,
    contentLink: '/press-release'
  }
]

const PressRelease = () => {
  return (
    <div className='spirit__content section__padding' id='pressRelease'>
      <div className='spirit__heading'>
          <h1>PRESS RELEASE</h1>
      </div>
      {pressReleaseData.map((item, index) => (
        <div className='spirit__pressRelease-article' key={item.contentLink}>
          <Article text={item.text} contentImage={item.pressReleaseImage} contentLink={item.contentLink} />
        </div>
      ))}
    </div>
  )
}

export default PressRelease