import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Navbar } from './components'
import './App.css'

import Home from './pages/Home'
import Klasemen from './pages/Klasemen'
import Kontingen from './pages/Kontingen'

import KompetisiOlahraga from './pages/KompetisiOlahraga'
import KompetisiSeni from './pages/KompetisiSeni'
import PressRelease from './pages/PressRelease'
import ContactUs from './pages/ContactUs'

import MatchDetail from './pages/MatchDetail'
import PressReleaseDetail from './pages/PressReleaseDetail'

// import Admin from './pages/adminPage/Admin'
import AdminRegister from './pages/adminPages/AdminRegister'
import AdminLogin from './pages/adminPages/AdminLogin'

import AdminAdmin from './pages/adminPages/DataAdminPage'
import AdminAdminAdd from './pages/adminPages/DataAdminAddPage'
import AdminAdminEdit from './pages/adminPages/DataAdminEditPage'

import AdminDepartment from './pages/adminPages/DataDepartmentPage'
import AdminDepartmentAdd from './pages/adminPages/DataDepartmentAddPage'
import AdminDepartmentEdit from './pages/adminPages/DataDepartmentEditPage'

import DataSportPage from './pages/adminPages/DataSportPage'
import DataSportAddPage from './pages/adminPages/DataSportAddPage'
import DataSportEditPage from './pages/adminPages/DataSportEditPage'

import DataArtPage from './pages/adminPages/DataArtPage'
import DataArtAddPage from './pages/adminPages/DataArtAddPage'
import DataArtEditPage from './pages/adminPages/DataArtEditPage'

import DataAthletePage from './pages/adminPages/DataAthletePage'
import DataAthleteAddPage from './pages/adminPages/DataAthleteAddPage'
import DataAthleteEditPage from './pages/adminPages/DataAthleteEditPage'

import DataArtistPage from './pages/adminPages/DataArtistPage'
import DataArtistAddPage from './pages/adminPages/DataArtistAddPage'
import DataArtistEditPage from './pages/adminPages/DataArtistEditPage'

import DataSportTeamPage from './pages/adminPages/DataSportTeamPage'
import DataSportTeamAddPage from './pages/adminPages/DataSportTeamAddPage'
import DataSportTeamEditPage from './pages/adminPages/DataSportTeamEditPage'

import DataMatchPage from './pages/adminPages/DataMatchPage'
import DataMatchAddPage from './pages/adminPages/DataMatchAddPage'
import DataMatchEditPage from './pages/adminPages/DataMatchEditPage'

import DataContestPage from './pages/adminPages/DataContestPage'
import DataContestAddPage from './pages/adminPages/DataContestAddPage'
import DataContestEditPage from './pages/adminPages/DataContestEditPage'

import DataArticlePage from './pages/adminPages/DataArticlePage'
import DataArticleAddPage from './pages/adminPages/DataArticleAddPage'
import DataArticleEditPage from './pages/adminPages/DataArticleEditPage'

const App = () => {

  const authenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kontingen' element={<Kontingen />}/>
        <Route path='/klasemen' element={<Klasemen />} />
        <Route path='/press-release' element={<PressRelease />}/>
        <Route path='/contact-us' element={<ContactUs />}/>

        <Route path='/kompetisi-olahraga' element={<KompetisiOlahraga />} />
        <Route path='/kompetisi-seni' element={<KompetisiSeni />} />
        <Route path='/match-detail/:id' element={<MatchDetail />} />
        <Route path='/press-release/:d' element={<PressReleaseDetail />}/>

        {/* {authenticated && <Route path='/admin/home' element={<Admin />} exact/>} */}
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        {authenticated?.is_admin && <Route exact path='/admin/admin' element={<AdminAdmin />} />}
        {authenticated?.is_admin && <Route exact path='/admin/admin/add' element={<AdminAdminAdd />} />}
        {authenticated?.is_admin && <Route exact path='/admin/admin/edit/:id' element={<AdminAdminEdit />} />}

        {authenticated?.is_admin && <Route exact path='/admin/department' element={<AdminDepartment />} />}
        {authenticated?.is_admin && <Route exact path='/admin/department/add' element={<AdminDepartmentAdd />} />}
        {authenticated?.is_admin && <Route exact path='/admin/department/edit/:id' element={<AdminDepartmentEdit />} />}

        {authenticated?.is_admin && <Route exact path='/admin/sport' element={<DataSportPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/sport/add' element={<DataSportAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/sport/edit/:id' element={<DataSportEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/art' element={<DataArtPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/art/add' element={<DataArtAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/art/edit/:id' element={<DataArtEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/athlete' element={<DataAthletePage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/athlete/add' element={<DataAthleteAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/athlete/edit/:id' element={<DataAthleteEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/artist' element={<DataArtistPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/artist/add' element={<DataArtistAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/artist/edit/:id' element={<DataArtistEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/sport-team' element={<DataSportTeamPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/sport-team/add' element={<DataSportTeamAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/sport-team/edit/:id' element={<DataSportTeamEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/match' element={<DataMatchPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/match/add' element={<DataMatchAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/match/edit/:id' element={<DataMatchEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/contest' element={<DataContestPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/contest/add' element={<DataContestAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/contest/edit/:id' element={<DataContestEditPage />} />}

        {authenticated?.is_admin && <Route exact path='/admin/article' element={<DataArticlePage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/article/add' element={<DataArticleAddPage />} />}
        {authenticated?.is_admin && <Route exact path='/admin/article/edit/:id' element={<DataArticleEditPage />} />}
      </Routes>
    </div>
  )
}

export default App