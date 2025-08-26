import React from 'react'
import './index.css'
import { Routes, Route, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Subscription from './pages/Subscription'
import Profile from './pages/Profile'
import MyList from './pages/MyList'
import Movies from './pages/Movies'
import WebSeries from './pages/WebSeries'
import Search from './pages/Search'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/webseries" element={<WebSeries />} />
        <Route path="/search" element={<Search />} />
    </Routes>
    
    </>
  )
}

export default App