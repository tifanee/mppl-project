import React from 'react'
import './jadwal.css'

import { NonH2H } from '../index'

const SeniJadwal = ({ jadwalData }) => {
  return (
    <div className='spirit__content section__padding'>
        <div className="spirit__heading">
          <h1>JADWAL</h1>
        </div>

        {
            Object.entries(jadwalData
                .sort((a, b) => (
                    a.time.localeCompare(b.time)
                ))
                .reduce((prev, curr) => {
                    prev[curr.date]
                        ? prev[curr.date].push(curr)
                        : (prev[curr.date] = [curr])

                    return prev
                }, {})
            )
            .map(([date, dateComponent]) => {
                return (
                    <div className='spirit__jadwal-date' key={date}>
                        <h2>{dateComponent[0].day}, {date}</h2>
                        {
                            Object.entries(dateComponent
                                .reduce((prev, curr) => {
                                prev[curr.time]
                                ? prev[curr.time].push(curr)
                                : (prev[curr.time] = [curr])
            
                                return prev
                                }, {})
                            )
                            .map(([time, componentTime]) => {
                                return (
                                    <div className='spirit__jadwal-content' key={time}>
                                        <div className='spirit__jadwal-time'>
                                            <h1>{time}</h1>
                                        </div>
                                        <div className="spirit__jadwal-container">
                                            {componentTime.map((item, index) => (
                                                <NonH2H data={item} key={item._id}/>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default SeniJadwal