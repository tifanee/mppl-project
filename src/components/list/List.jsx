import React, { useState, useEffect } from 'react'
import './list.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const List = ({ listImage, listName, listPropTag}) => {

  const [listTag, setListTag] = useState({listName: ''})
  
  useEffect(() => {
    listPropTag(listTag)
  }, [listPropTag, listTag])

  return (
    <div className='card' onClick={() => setListTag({listName})}>
      <div className='card-content'>
        <img src={listImage} alt="tes" />
        <p>{listName}</p>
      </div>
    </div>
  )
}

export default List