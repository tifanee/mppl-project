import React from 'react'

import './medals.css'
import { gold, silver, bronze} from './imports'

const Medals = ({ data }) => {
  return (
    <div className='spirit__medals'>
      <div className='spirit__klasemen-department'>
          <img src={data.departmentImage} alt="" />
          <p>{data.departmentName}</p>
      </div>
      <div className='spirit__klasemen-medals'>
          <div className='spirit__medal'>
            <img src={gold} alt="gold" />
            <p className='spirit__medal-count'>{data.goldMedal}</p>
          </div>
          <div className='spirit__medal'>
            <img src={silver} alt="silver" />
            <p className='spirit__medal-count'>{data.silverMedal}</p>
          </div>
          <div className='spirit__medal'>
            <img src={bronze} alt="bronze" />
            <p className='spirit__medal-count'>{data.bronzeMedal}</p>
          </div>
          <div className='spirit__medal'>
            <p>{data.totalMedal}</p>
          </div>
      </div>
    </div>
  )
}

export default Medals