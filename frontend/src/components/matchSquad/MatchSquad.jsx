import React from 'react'
import './matchSquad.css'

const MatchSquad = ({data}) => {
  return (
    <div className='spirit__match-squad'>
        <p>SUSUNAN PEMAIN</p>
        <div className='spirit__squad-detail'>
            <div className='spirit__squad-team'>
                <div className='spirit__squad-dept'>
                    <p>{data.dept_name1}</p>
                </div>
                {data.athletes_team1?.map((athlete) => (
                    <div className='spirit__squad' key={athlete._id}>
                        <p className='spirit__squad-batch'>{athlete.batch}</p>
                        <p className='spirit__squad-name'>{athlete.name}</p>
                    </div>
                ))}
            </div>

            <p>VS</p>

            <div className='spirit__squad-team'>
                <div className='spirit__squad-dept'>
                    <p>{data.dept_name2}</p>
                </div>
                {data.athletes_team2?.map((athlete) => (
                    <div className='spirit__squad' key={athlete._id}>
                        <p className='spirit__squad-batch'>{athlete.batch}</p>
                        <p className='spirit__squad-name'>{athlete.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MatchSquad