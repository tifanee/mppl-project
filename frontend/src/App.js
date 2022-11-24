import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

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
import PressReleaseDetail from './pages/PressReleaseDetail'

import Admin from './pages/Admin'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'

import AdminDepartment from './pages/DataDepartmentPage'
import AdminDepartmentAdd from './pages/DataDepartmentAddPage'
import AdminDepartmentEdit from './pages/DataDepartmentEditPage'

import DataSportPage from './pages/DataSportPage'
import DataSportAddPage from './pages/DataSportAddPage'
import DataSportEditPage from './pages/DataSportEditPage'

import DataAthletePage from './pages/DataAthletePage'
import DataAthleteAddPage from './pages/DataAthleteAddPage'
import DataAthleteEditPage from './pages/DataAthleteEditPage'

import DataSportTeamPage from './pages/DataSportTeamPage'
import DataSportTeamAddPage from './pages/DataSportTeamAddPage'
import DataSportTeamEditPage from './pages/DataSportTeamEditPage'

import DataMatchPage from './pages/DataMatchPage'
import DataMatchAddPage from './pages/DataMatchAddPage'
import DataMatchEditPage from './pages/DataMatchEditPage'

const App = () => {

  const authenticated = localStorage.getItem('isAuthenticated')
  console.log(authenticated)
  // localStorage.clear()

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kompetisi' element={<Kompetisi />}/>
        <Route path='/kontingen' element={<Kontingen />}/>
        <Route path='/klasemen' element={<Klasemen />} />
        <Route path='/press-release' element={<PressRelease />}/>
        <Route path='/contact-us' element={<ContactUs />}/>

        <Route path='/kompetisi-olahraga' element={<KompetisiOlahraga />} />
        <Route path='/kompetisi-seni' element={<KompetisiSeni />} />
        <Route path='/match-detail/:id' element={<MatchDetail />} />
        <Route path='/press-release/:d' element={<PressReleaseDetail />}/>

        {authenticated && <Route path='/admin/home' element={<Admin />} exact/>}
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        {authenticated && <Route path='/admin/department' element={<AdminDepartment />} />}
        {authenticated && <Route path='/admin/department/add' element={<AdminDepartmentAdd />} />}
        {authenticated && <Route path='/admin/department/edit/:id' element={<AdminDepartmentEdit />} />}

        {authenticated && <Route path='/admin/sport' element={<DataSportPage />} />}
        {authenticated && <Route path='/admin/sport/add' element={<DataSportAddPage />} />}
        {authenticated && <Route path='/admin/sport/edit/:id' element={<DataSportEditPage />} />}

        {authenticated && <Route path='/admin/athlete' element={<DataAthletePage />} />}
        {authenticated && <Route path='/admin/athlete/add' element={<DataAthleteAddPage />} />}
        {authenticated && <Route path='/admin/athlete/edit/:id' element={<DataAthleteEditPage />} />}

        {authenticated && <Route path='/admin/sport-team' element={<DataSportTeamPage />} />}
        {authenticated && <Route path='/admin/sport-team/add' element={<DataSportTeamAddPage />} />}
        {authenticated && <Route path='/admin/sport-team/edit/:id' element={<DataSportTeamEditPage />} />}

        {authenticated && <Route path='/admin/match' element={<DataMatchPage />} />}
        {authenticated && <Route path='/admin/match/add' element={<DataMatchAddPage />} />}
        {authenticated && <Route path='/admin/match/edit/:id' element={<DataMatchEditPage />} />}
      </Routes>
    </div>
  )
}

export default App