import React from 'react'
import { ArtistDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtistAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArtistDataAdd />
      </div>
    </>
  )
}

export default DataArtistAddPage