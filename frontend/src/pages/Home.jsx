import React from 'react'

import { Header, Klasemen, Kompetisi, Kontingen, PressRelease } from '../containers/index'

const Home = () => {
  return (
    <>
        <Header />
        <Kompetisi />
        <Kontingen />
        <Klasemen />
        <PressRelease />
    </>
  )
}

export default Home