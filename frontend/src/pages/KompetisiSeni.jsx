import React from 'react'
import { Navbar } from '../components/index'
import { JadwalSeni } from '../containers/index'

const KompetisiSeni = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      < JadwalSeni />
    </div>
  )
}

export default KompetisiSeni