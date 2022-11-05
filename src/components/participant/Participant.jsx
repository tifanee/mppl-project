import React from 'react'
import './participant.css'
import { tes1 } from '../../assets/tes/imports'

const Participant = ({ participantImage, participantName, participantDepartment, participantKompetisi }) => {
  return (
    <div className='participant-card'>
        <span className='overlay'></span>
        <div className='participant-image'>
            <img src={participantImage} alt="Participant" />
        </div>
        <div className='participant-content'>
            <p className='name'>{participantName}</p>
            <p className='department'>{participantDepartment}</p>
            <p className='type'>{participantKompetisi}</p>
        </div>
    </div>
  )
}

export default Participant