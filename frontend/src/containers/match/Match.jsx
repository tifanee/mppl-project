import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './match.css'

import { MatchResult, MatchSquad } from '../../components/index'

const MatchDetail = () => {
  const params = useParams()
  
  const [matchs, setMatchs] = useState([])

  useEffect(() => {
    getMatchs()
  }, [])

  const getMatchs = async () => {
    const response = await axios.get(`http://localhost:8000/api/matchs/${params.id}`)
    setMatchs(response.data)
  }

  return (
    <div className='section__padding'>
      <MatchResult data={matchs}/>
      <MatchSquad data={matchs}/>
    </div>
  )
}

export default MatchDetail