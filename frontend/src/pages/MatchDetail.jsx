import React from 'react'
import { Navbar } from '../components/index'

import { Match } from '../containers/index'

const MatchDetail = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      < Match />
    </div>
  )
}

export default MatchDetail