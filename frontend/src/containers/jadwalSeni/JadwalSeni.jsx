import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './jadwalSeni.css'

import { KompetisiSeni } from '../index'
import { SeniJadwal } from '../../components/index'

const JadwalSeni = () => {

  const [contests, setContests] = useState([])

  useEffect(() => {
    getContests()
  }, [])

  const getContests = async () => {
    const response = await axios.get('http://localhost:8000/api/contests')
    setContests(response.data)
  }

  const [listTag, setListTag] = useState({listName: ''})

  const jadwalFiltered = (
    contests.filter(tag => {
      return tag.art_name.toLowerCase().includes(listTag.listName?.toLowerCase())
    })
  )

  return (
      <>
          < KompetisiSeni getListTag={setListTag} />
          < SeniJadwal jadwalData={jadwalFiltered} />
      </>
  )
}

export default JadwalSeni