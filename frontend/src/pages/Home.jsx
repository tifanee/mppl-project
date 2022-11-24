import React from 'react'
import { Navbar } from '../components/index'

import { Header, Klasemen, Kompetisi, Kontingen, PressRelease } from '../containers/index'

const Home = () => {
  return (
    <>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      <Header />
      <Kompetisi />
      <Kontingen />
      <Klasemen />
      <PressRelease />
    </>
  )
}

export default Home