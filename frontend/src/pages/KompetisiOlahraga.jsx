import React from 'react'
import { Navbar } from '../components/index'
import { JadwalOlahraga } from '../containers/index'

const KompetisiOlahraga = () => {

  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      < JadwalOlahraga />
    </div>
  )
}

export default KompetisiOlahraga