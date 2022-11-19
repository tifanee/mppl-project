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
                            <H2H 
                              departmentImage1={item.dept_image1}
                              departmentName1={item.dept_name1}
                              departmentImage2={item.dept_image2}
                              departmentName2={item.dept_name2}
                              kompetisiName={item.sport_name}
                              kompetisiLocation={item.location} 
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