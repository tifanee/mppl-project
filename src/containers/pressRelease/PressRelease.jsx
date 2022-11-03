import React from 'react'

import './pressRelease.css'
import { Article } from '../../components'
import pressReleaseImage1 from '../../assets/pressRelease.jpeg'

const pressReleaseData = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        <div className='spirit__pressRelease-article'>
          <Article text={item.text} contentImage={item.pressReleaseImage} contentLink={item.contentLink} />
        </div>
      ))}
    </div>
  )
}

export default PressRelease