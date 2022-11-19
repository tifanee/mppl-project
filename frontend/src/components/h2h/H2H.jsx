import React from 'react'
import './h2h.css'

import location from '../../assets/location.png'

const H2H = ({ departmentImage1, departmentName1, departmentImage2, departmentName2, kompetisiName, kompetisiLocation }) => {
  return (
    <div className='spirit__h2h-card'>
        <div className='spirit__h2h-content'>
            <div className="spirit__h2h-image">
                <img src={departmentImage1} alt="g1" />
                <p>VS</p>
                <img src={departmentImage2} alt="g2" />
            </div>
            <div className="spirit__h2h-kompetisi">
                <div className='spirit__h2h-department'>
                    <p>{departmentName1}</p>
                    <p className='light'>VS</p>
                    <p>{departmentName2}</p>
                </div>
                <div >
                    <p className='light'>{kompetisiName}</p>
                </div>
            </div>
        </div>
        <div className="spirit__h2h-location">
            <img src={location} alt="location" />
            <p>{kompetisiLocation}</p>
        </div>
    </div>
  )
}

export default H2H