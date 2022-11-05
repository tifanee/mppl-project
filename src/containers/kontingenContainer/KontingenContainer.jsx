import React, { useState } from 'react'
import './kontingenContainer.css'

import { KontingenDeparment, KontingenParticipant } from '../index'
import { tes1, tes2, tes3, tes4, tes5, tes6, tes7, tes8, tes9 } from '../../assets/tes/imports'

const participantData = [
    {
      participantImage: tes1,
      participantName: 'Joko Kendil',
      participantDepartment: 'GFM',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes2,
      participantName: 'Bungo Jumpo',
      participantDepartment: 'Statistika',
      participantKompetisi: 'Tenis'
    },
    {
      participantImage: tes3,
      participantName: 'Febri Bawahir',
      participantDepartment: 'Ilmu Komputer',
      participantKompetisi: 'Basket'
    },
    {
      participantImage: tes4,
      participantName: 'Ampar Pisang',
      participantDepartment: 'Statistika',
      participantKompetisi: 'Poster'
    },
    {
      participantImage: tes5,
      participantName: 'Nobita Agustino',
      participantDepartment: 'GFM',
      participantKompetisi: 'Lukis'
    },
    {
      participantImage: tes6,
      participantName: 'Gerry Salut',
      participantDepartment: 'Statistika',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes7,
      participantName: 'Malkis Roma',
      participantDepartment: 'GFM',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes8,
      participantName: 'Kim Jongun',
      participantDepartment: 'GFM',
      participantKompetisi: 'Bulu Tangkis'
    },
    {
      participantImage: tes9,
      participantName: 'Doraemon',
      participantDepartment: 'Matematika',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes1,
      participantName: 'Paradidam',
      participantDepartment: 'Biologi',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes2,
      participantName: 'Dudi Dudidam',
      participantDepartment: 'Statistika',
      participantKompetisi: 'Karate'
    },
    {
      participantImage: tes3,
      participantName: 'Sari Sori',
      participantDepartment: 'Matematika',
      participantKompetisi: 'Karate'
    },
]

const KontingenContainer = () => {

    const [listTag, setListTag] = useState({listName: ''})

    const kontingenFiltered = (
        participantData.filter(tag => {
        return tag.participantDepartment.includes(listTag.listName)
        })
    )

    return (
        <>
            < KontingenDeparment getListTag={setListTag} />
            < KontingenParticipant participantData={kontingenFiltered}/>
        </>
    )
}

export default KontingenContainer