import React from 'react'
import './jadwal.css'

import { H2H } from '../index'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../department/imports'

const jadwalData = [
  {
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:30'
  },
  {
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00'
  },
  {
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30'
  },
  {
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00'
  },
  {
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30'
  },
  {
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:00'
  },
]

const jadwal = () => {

  return (
    <div className='spirit__jadwal section__padding' id='jadwal'>
      <div className="spirit__jadwal-heading">
          <h1>JADWAL</h1>
      </div>
      <div className='spirit__jadwal-date'>
        <h2>Senin, 24 Oktober 2022</h2>
          {Object.entries(
            jadwalData.sort((a, b) => (
              a.kompetisiTime.localeCompare(b.kompetisiTime)))
              .reduce((prev, curr) => {
              prev[curr.kompetisiTime]
                ? prev[curr.kompetisiTime].push(curr)
                : (prev[curr.kompetisiTime] = [curr])

              return prev
            }, {})
            ).map(([key, value]) => {
            return (
              <div className='spirit__jadwal-content'>
                <div className='spirit__jadwal-time'>
                  <h1>{key}</h1>
                </div>
                <div className="spirit__jadwal-container">
                  {value.map((item, index) => (
                    <H2H 
                      departmentImage1={item.departmentImage1}
                      departmentName1={item.departmentName1}
                      departmentImage2={item.departmentImage2}
                      departmentName2={item.departmentName2}
                      kompetisiName={item.kompetisiName}
                      kompetisiLocation={item.kompetisiLocation} 
                    />
                  ))}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default jadwal