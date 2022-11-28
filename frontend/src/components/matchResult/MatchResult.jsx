import React from 'react'
import './matchResult.css'

import location from '../../assets/location.png'

const MatchResult = ({data}) => {
    
  return (
    <div className='spirit__match-result'>
        <div className='spirit__match-name-date'>
            <div className='spirit__match-name'>
                <p>{data.sport_name}</p>
            </div>
            <div className='spirit__match-date'>
                <p>{data.day}, {data.date}</p>
                <p>{data.time} WIB</p>
            </div>
        </div>
        <div className='spirit__match-result-detail'>
            <div className='spirit__dept-detail'>
                <img src={data.dept_image1} alt="" />
                <p>{data.dept_name1}</p>
            </div>
            <div>
                {
                    data.is_finished == false ? <p>- : -</p> : <p>{data.score_result?.[0]} : {data.score_result?.[1]}</p>
                }
            </div>
            <div className='spirit__dept-detail'>
                <img src={data.dept_image2} alt="" />
                <p>{data.dept_name2}</p>
            </div>
        </div>
        <div className='spirit__match-location'>
            <img src={location} alt="" />
            <p>{data.location}</p>
        </div>
    </div>
  )
}

export default MatchResult