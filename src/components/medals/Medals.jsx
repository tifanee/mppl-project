import React from 'react'

import './medals.css'
import { gold, silver, bronze} from './imports'

const Medals = ({ departmentImage, departmentName, goldMedal, silverMedal, bronzeMedal, totalMedal }) => {
  return (
    <div className='spirit__medals'>
      <div className='spirit__klasemen-department'>
          <img src={departmentImage} alt="" />
          <p>{departmentName}</p>
      </div>
      <div className='spirit__klasemen-medals'>
          <div className='spirit__medal'>
            <img src={gold} alt="gold" />
            <p className='spirit__medal-count'>{goldMedal}</p>
          </div>
          <div className='spirit__medal'>
            <img src={silver} alt="silver" />
            <p className='spirit__medal-count'>{silverMedal}</p>
          </div>
          <div className='spirit__medal'>
            <img src={bronze} alt="bronze" />
            <p className='spirit__medal-count'>{bronzeMedal}</p>
          </div>
          <div className='spirit__medal'>
            <p>{totalMedal}</p>
          </div>
      </div>
    </div>
  )
}

export default Medals