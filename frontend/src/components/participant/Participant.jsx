import React from 'react'
import './participant.css'

const Participant = ({ participant }) => {
  return (
    <div className='participant-card' key={participant._id}>
        <span className='overlay'></span>
        <div className='participant-image'>
            <img src={participant.image} alt="Participant" />
        </div>
        <div className='participant-content'>
            <p className='name'>{participant.name}</p>
            <p className='department'>{participant.department}</p>
            <p className='type'>{participant.sport_team === undefined ? participant.artist_in : participant.sport_team}</p>
        </div>
    </div>
  )
}

export default Participant