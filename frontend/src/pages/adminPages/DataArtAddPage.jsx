import React from 'react'
import { ArtDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArtDataAdd />
      </div>
    </>
  )
}

export default DataArtAddPage