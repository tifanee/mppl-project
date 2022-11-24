import React from 'react'
import { Navbar } from '../components/index'
import { PressReleaseArticle } from '../containers/index'

const PressReleaseDetail = () => {
  return (
    <div>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      <PressReleaseArticle />
    </div>
  )
}

export default PressReleaseDetail