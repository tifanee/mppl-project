import React from 'react'
import { ArtDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArtDataEdit />
      </div>
    </>
  )
}

export default DataArtEditPage