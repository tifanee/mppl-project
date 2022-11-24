import React from 'react'
import { Navbar } from '../components/index'

import { PressReleaseList } from '../containers/index'

const PressRelease = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      <PressReleaseList />
    </div>
  )
}

export default PressRelease