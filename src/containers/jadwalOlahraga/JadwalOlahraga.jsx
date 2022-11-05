import React, { useState } from 'react'
import './jadwalOlahraga.css'

import { Olahraga } from '../index'
import { Jadwal } from '../../components/index'
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

const JadwalOlahraga = () => {

  const [kompetisiTag, setKompetisiTag] = useState({kompetisiName: ''})

  const jadwalFiltered = () => (
    jadwalData.filter(tag => {
      return tag.kompetisiName.includes(kompetisiTag.kompetisiName)
    })
  )

  return (
    <>
        < Olahraga getKompetisiTag={setKompetisiTag} />
        < Jadwal jadwalData={jadwalFiltered()} />
    </>
  )
}

export default JadwalOlahraga