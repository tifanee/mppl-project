import React from 'react'
import { Navbar } from '../components/index'
import { KontingenContainer } from '../containers/index'

const Kontingen = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      < KontingenContainer />
    </div>
  )
}

export default Kontingen