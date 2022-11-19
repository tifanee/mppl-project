import React from 'react'

import './medals.css'
import { gold, silver, bronze} from './imports'

const Medals = ({ data }) => {
  return (
    <div className='spirit__medals'>
      <div className='spirit__klasemen-department'>
          <img src={data.dept_image} alt="" />
          <p>{data.dept_code} - {data.dept_name}</p>
      </div>
      <div className='spirit__klasemen-medals'>
          <div className='spirit__medal'>
            <img src={gold} alt="gold" />
            <p className='spirit__medal-count'>{data.gold_medal_count}</p>
          </div>
          <div className='spirit__medal'>
            <img src={silver} alt="silver" />
            <p className='spirit__medal-count'>{data.silver_medal_count}</p>
          </div>
          <div className='spirit__medal'>
            <img src={bronze} alt="bronze" />
            <p className='spirit__medal-count'>{data.bronze_medal_count}</p>
          </div>
          <div className='spirit__medal'>
            <p>{data.gold_medal_count + data.silver_medal_count + data.bronze_medal_count}</p>
          </div>
      </div>
    </div>
  )
}

export default Medals