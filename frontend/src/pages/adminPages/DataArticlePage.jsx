import React from 'react'
import { DataArticle } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArticlePage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <DataArticle />
      </div>
    </>
  )
}

export default DataArticlePage