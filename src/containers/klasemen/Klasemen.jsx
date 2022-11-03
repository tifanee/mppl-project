import React from 'react'

import './klasemen.css'
import { Article2 } from '../../components'
import klasemenImage1 from '../../assets/klasemen.jpeg'

const klasemenData = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        <div className='spirit__klasemen-article'>
          <Article2 text={item.text} contentImage={item.klasemenImage} contentLink={item.contentLink} />
        </div>
      ))}
    </div>
  )
}

export default Klasemen