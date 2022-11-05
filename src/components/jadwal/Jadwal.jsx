import React, { useState, useEffect } from 'react'
import './jadwal.css'

import { H2H } from '../../components/index'


const Jadwal = ({ jadwalData }) => {
  return (
    <div className='spirit__content section__padding' id='jadwal'>
      <div className="spirit__heading">
          <h1>JADWAL</h1>
      </div>

      {
        Object.entries(jadwalData
          .sort((a, b) => (
            a.kompetisiTime.localeCompare(b.kompetisiTime)
          ))
          .reduce((prev, curr) => {
            prev[curr.kompetisiDate]
              ? prev[curr.kompetisiDate].push(curr)
              : (prev[curr.kompetisiDate] = [curr])

            return prev
          }, {})
        )
        .map(([date, dateComponent]) => {
          return (
            <div className='spirit__jadwal-date' key={date}>
              <h2>{dateComponent[0].kompetisiDay}, {date}</h2>
              {
                Object.entries(dateComponent
                  .reduce((prev, curr) => {
                    prev[curr.kompetisiTime]
                    ? prev[curr.kompetisiTime].push(curr)
                    : (prev[curr.kompetisiTime] = [curr])

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
                            <H2H 
                              departmentImage1={item.departmentImage1}
                              departmentName1={item.departmentName1}
                              departmentImage2={item.departmentImage2}
                              departmentName2={item.departmentName2}
                              kompetisiName={item.kompetisiName}
                              kompetisiLocation={item.kompetisiLocation} 
                              key={item.id}
                            />
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

export default Jadwal