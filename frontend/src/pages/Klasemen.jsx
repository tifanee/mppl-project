import React from 'react'
import { Navbar } from '../components/index'

import { MedalTable } from '../containers'

const Klasemen = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      <MedalTable />
    </div>
  )
}

export default Klasemen