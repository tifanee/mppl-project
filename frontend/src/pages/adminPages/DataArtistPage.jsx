import React from 'react'
import { DataArtist } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtistPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataArtist />
      </div>
    </>
  )
}

export default DataArtistPage