import React from 'react'
import { ArticleDataAdd } from '../../containers/index'
import { NavbarAdmin } from '../../components/index'

const DataArticleAddPage = () => {
  return (
    <>
      <div className='navbar__bg'>
        <NavbarAdmin />
      </div>
      <div className='spirit__content section__padding'>
        <ArticleDataAdd />
      </div>
    </>
  )
}

export default DataArticleAddPage