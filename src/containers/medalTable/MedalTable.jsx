import React from 'react'
import './medalTable.css'

import { Medals } from '../../components/index'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../../components/department/imports'

const klasemenMedalData = [
  {
    departmentImage: g1,
    departmentName: 'G1 - Statistika',
    goldMedal: 1,
    silverMedal: 2,
    bronzeMedal: 3,
    totalMedal: 6
  },
  {
    departmentImage: g2,
    departmentName: 'G2 - Geofisika dan Meteorologi',
    goldMedal: 4,
    silverMedal: 5,
    bronzeMedal: 6,
    totalMedal: 15
  },
  {
    departmentImage: g3,
    departmentName: 'G3 - Biologi',
    goldMedal: 7,
    silverMedal: 8,
    bronzeMedal: 9,
    totalMedal: 24
  },
  {
    departmentImage: g4,
    departmentName: 'G4 - Kimia',
    goldMedal: 10,
    silverMedal: 11,
    bronzeMedal: 12,
    totalMedal: 32
  },
  {
    departmentImage: g5,
    departmentName: 'G5 - Matematika',
    goldMedal: 13,
    silverMedal: 14,
    bronzeMedal: 15,
    totalMedal: 42
  },
  {
    departmentImage: g6,
    departmentName: 'G6 - Ilmu Komputer',
    goldMedal: 16,
    silverMedal: 17,
    bronzeMedal: 18,
    totalMedal: 51
  },
  {
    departmentImage: g7,
    departmentName: 'G7 - Fisika',
    goldMedal: 19,
    silverMedal: 20,
    bronzeMedal: 21,
    totalMedal: 60
  },
  {
    departmentImage: g8,
    departmentName: 'G8 - Biokimia',
    goldMedal: 22,
    silverMedal: 23,
    bronzeMedal: 24,
    totalMedal: 69
  },
]

const MedalTable = () => {
  return (
    <div className='spirit__klasemen_medalTable section__padding' id='medalTable'>
        <div className='spirit__klasemen-heading_medalTable'>
          <h1>KLASEMEN</h1>
        </div>
        <div className='spirit__klasemen_medalTable-result'>
            <div className='spirit__klasemen_medalTable-heading'>
                <div className='spirit__klasemen-departments_container'>
                    <p>Department</p>
                </div>
                <div className='spirit__klasemen-medals_container'>
                    <p>Gold</p>
                    <p>Silver</p>
                    <p>Bronze</p>
                    <p>Total</p>
                </div>
            </div>
            <div className='spirit__klasemen_medalTable-body'>
                {klasemenMedalData.sort((a, b) => (b.goldMedal - a.goldMedal)).map((item, index) => (
                    <Medals 
                        departmentImage={item.departmentImage} 
                        departmentName={item.departmentName}
                        goldMedal={item.goldMedal}
                        silverMedal={item.silverMedal}
                        bronzeMedal={item.bronzeMedal}
                        totalMedal={item.totalMedal}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MedalTable