import React from 'react'
import { ArtistDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtistEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArtistDataEdit />
      </div>
    </>
  )
}

export default DataArtistEditPage