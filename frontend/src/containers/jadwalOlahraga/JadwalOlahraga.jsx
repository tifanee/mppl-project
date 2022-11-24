import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './jadwalOlahraga.css'

import { KompetisiOlahraga } from '../index'
import { Jadwal } from '../../components/index'

const JadwalOlahraga = () => {

  const [matchs, setMatchs] = useState([])

  useEffect(() => {
    getMatchs()
  }, [])

  const getMatchs = async () => {
    const response = await axios.get('http://localhost:8000/api/matchs')
    setMatchs(response.data)
  }

  const [listTag, setListTag] = useState({listName: ''})

  const jadwalFiltered = (
    matchs.filter(tag => {
      return tag.sport_name.includes(listTag.listName)
    })
  )

  return (
    <>
        < KompetisiOlahraga getListTag={setListTag} />
        < Jadwal jadwalData={jadwalFiltered} />
    </>
  )
}

export default JadwalOlahraga