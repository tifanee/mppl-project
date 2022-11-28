import React from 'react'
import { ArticleDataEdit } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArticleEditPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArticleDataEdit />
      </div>
    </>
  )
}

export default DataArticleEditPage