import React from 'react'
import './jadwal.css'

import { H2H } from '../../components/index'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../../components/department/imports'

const jadwalData = [
  {
    id: 1,
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:30',
    kompetisiDay: 'Senin',
    kompetisiDate: '24 Oktober 2022'
  },
  {
    id: 2,
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00',
    kompetisiDay: 'Senin',
    kompetisiDate: '24 Oktober 2022'
  },
  {
    id: 3,
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30',
    kompetisiDay: 'Senin',
    kompetisiDate: '24 Oktober 2022'
  },
  {
    id: 4,
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00',
    kompetisiDay: 'Senin',
    kompetisiDate: '24 Oktober 2022'
  },
  {
    id: 5,
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30',
    kompetisiDay: 'Senin',
    kompetisiDate: '24 Oktober 2022'
  },
  {
    id: 6,
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:00',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 7,
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:30',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 8,
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 9,
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 10,
    departmentImage1: g1,
    departmentName1: 'G1 Statistika',
    departmentImage2: g2,
    departmentName2: 'G2 GFM',
    kompetisiName: 'Futsal',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:00',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 11,
    departmentImage1: g3,
    departmentName1: 'G3 Biologi',
    departmentImage2: g4,
    departmentName2: 'G4 Kimia',
    kompetisiName: 'Basket',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '18:30',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
  {
    id: 12,
    departmentImage1: g5,
    departmentName1: 'G5 Matematika',
    departmentImage2: g6,
    departmentName2: 'G2 Ilmu Komputer',
    kompetisiName: 'Karate',
    kompetisiLocation: 'Gymnasium',
    kompetisiTime: '19:00',
    kompetisiDay: 'Rabu',
    kompetisiDate: '26 Oktober 2022'
  },
]

const Jadwal = () => {

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
            <div className='spirit__jadwal-date'>
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
                    <div className='spirit__jadwal-content'>
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