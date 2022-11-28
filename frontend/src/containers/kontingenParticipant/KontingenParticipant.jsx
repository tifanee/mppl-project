import React from 'react'
import './kontingenParticipant.css'

import { Participant } from '../../components/index'

const KontingenParticipant = ( {participantData} ) => {
  return (
    <div className='spirit__kontingen-participant section__padding'>
      <div className='spirit__heading'>
        <h1>PESERTA</h1>
      </div>
      <div className='spirit__kontingen-participant_container'>
        {participantData.map((item, index) => (
          < Participant 
            participant={item}
            key={item._id}
          />
        ))}
      </div>
    </div>
  )
}

export default KontingenParticipant