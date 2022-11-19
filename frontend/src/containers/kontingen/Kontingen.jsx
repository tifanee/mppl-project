import React from 'react'

import './kontingen.css'
import { Department } from '../../components'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../../components/department/imports'

const departmentData = [
  {
    departmentImage: g1,
    departmentKey: 'G1',
    departmentName: 'Statistika'
  },
  {
    departmentImage: g2,
    departmentKey: 'G2',
    departmentName: 'GFM'
  },
  {
    departmentImage: g3,
    departmentKey: 'G3',
    departmentName: 'Biologi'
  },
  {
    departmentImage: g4,
    departmentKey: 'G4',
    departmentName: 'Kimia'
  },
  {
    departmentImage: g5,
    departmentKey: 'G5',
    departmentName: 'Matematika'
  },
  {
    departmentImage: g6,
    departmentKey: 'G6',
    departmentName: 'Ilmu Komputer'
  },
  {
    departmentImage: g7,
    departmentKey: 'G7',
    departmentName: 'Fisika'
  },
  {
    departmentImage: g8,
    departmentKey: 'G8',
    departmentName: 'Biokimia'
  },
]

const Kontingen = () => {
  return (
    <div className='spirit__content section__padding' id='kontingen'>
      <div className='spirit__heading'>
        <h1>KONTINGEN</h1>
      </div>
      <div className='spirit__kontingen-container'>
        {departmentData.map((item, index) => (
          <Department departmentImage={item.departmentImage} departmentKey={item.departmentKey} departmentName={item.departmentName} key={item.departmentImage + index} />
        ))}
      </div>
    </div>
  )
}

export default Kontingen