import React from 'react'
import { DataArt } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArtPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataArt />
      </div>
    </>
  )
}

export default DataArtPage