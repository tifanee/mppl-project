import React from 'react'
import { Link } from 'react-router-dom'
import './matchCard.css'

import location from '../../assets/location.png'

const NonH2H = ({ data }) => {
  return (
    <Link to={''}>
        <div className='spirit__nonh2h-card'>
            <div className='spirit__nonh2h-content'>
                <div className="spirit__nonh2h-type">
                    <p>{data.art_type}</p>
                </div>
                <div className="spirit__nonh2h-kompetisi">
                    <p>{data.art_name.toUpperCase()}</p>
                </div>
            </div>
            <div className="spirit__nonh2h-location">
                <img src={location} alt="location" />
                <p>{data.location}</p>
             </div>
        </div>
    </Link>
  )
}

export default NonH2H