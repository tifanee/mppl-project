import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './components'
import './App.css'

import Home from './pages/Home'
import Klasemen from './pages/Klasemen'
import Kompetisi from './pages/Kompetisi'
import Kontingen from './pages/Kontingen'

import KompetisiOlahraga from './pages/KompetisiOlahraga'
import KompetisiSeni from './pages/KompetisiSeni'
import PressRelease from './pages/PressRelease'
import ContactUs from './pages/ContactUs'

import MatchDetail from './pages/MatchDetail'

const App = () => {

  return (
    <div className='App'>
      <div className='navbar__bg'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kompetisi' element={<Kompetisi />}/>
        <Route path='/kontingen' element={<Kontingen />}/>
        <Route path='/klasemen' element={<Klasemen />} />
        <Route path='/press-release' element={<PressRelease />}/>
        <Route path='/contact-us' element={<ContactUs />}/>

        <Route path='/kompetisi-olahraga' element={<KompetisiOlahraga />} />
        <Route path='/kompetisi-seni' element={<KompetisiSeni />} />
        <Route path='/match-detail' element={<MatchDetail />} />
      </Routes>
    </div>
  )
}

export default App