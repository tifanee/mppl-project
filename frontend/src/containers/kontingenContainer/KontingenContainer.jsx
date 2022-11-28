import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './kontingenContainer.css'

import { KontingenDeparment, KontingenParticipant } from '../index'

const KontingenContainer = () => {

    const [participants, setParticipants] = useState([])

    useEffect(() => {
        getParticipants()
    }, [])

    const getParticipants = async () => {
        const athletes_response = await axios.get('http://localhost:8000/api/athletes')
        setParticipants(athletes_response.data)

        const artists_response = await axios.get('http://localhost:8000/api/artists')
        setParticipants(curr => [...curr, ...artists_response.data])
    }

    const [listTag, setListTag] = useState({listName: ''})

    const kontingenFiltered = (
        participants.filter(tag => {
        return tag.department.toLowerCase().includes(listTag.listName?.toLowerCase())
        })
        .sort((a,b) => a.name.localeCompare(b.name))
    )

    return (
        <>
            < KontingenDeparment getListTag={setListTag} />
            < KontingenParticipant participantData={kontingenFiltered}/>
        </>
    )
}

export default KontingenContainer