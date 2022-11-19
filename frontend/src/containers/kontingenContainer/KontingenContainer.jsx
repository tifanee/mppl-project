import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './kontingenContainer.css'

import { KontingenDeparment, KontingenParticipant } from '../index'

const KontingenContainer = () => {

    const [athletes, setAthletes] = useState([])

    useEffect(() => {
        getAthletes()
    }, [])

    const getAthletes = async () => {
        const response = await axios.get('http://localhost:8000/athletes')
        setAthletes(response.data)
    }

    const [listTag, setListTag] = useState({listName: ''})

    const kontingenFiltered = (
        athletes.filter(tag => {
        return tag.department.includes(listTag.listName)
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