import React from 'react'
import './matchResult.css'

import {g1, g2} from '../department/imports'
import location from '../../assets/location.png'

const MatchResult = () => {
  return (
    <div className='spirit__match-result'>
        <div className='spirit__match-name-date'>
            <div className='spirit__match-name'>
                <p>FUTSAL</p>
            </div>
            <div className='spirit__match-date'>
                <p>Minggu, 25 Oktober 2022</p>
                <p>19:30 WIB</p>
            </div>
        </div>
        <div className='spirit__match-result-detail'>
            <div className='spirit__dept-detail'>
                <img src={g1} alt="" />
                <p>G1 Statistika</p>
            </div>
            <div>
                <p>- : -</p>
            </div>
            <div className='spirit__dept-detail'>
                <img src={g2} alt="" />
                <p>G1 Statistika</p>
            </div>
        </div>
        <div className='spirit__match-location'>
            <img src={location} alt="" />
            <p>Gymnasium</p>
        </div>
    </div>
  )
}

export default MatchResult