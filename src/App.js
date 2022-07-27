import React from 'react'

import './App.scss'

// Component
import Header from 'components/Header/Header.js'
import Search from 'pages/Search/Search.js'
import User from 'pages/User/User.js'
import Detail from 'pages/Detail/Detail.js'
import Footer from 'components/Footer/Footer.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="c-container">
      <div className="c-container__wrap">
        {/* <Header /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/users/:username/repos" element={<User />} />
            <Route path="/users/:username/repos/:repo" element={<Detail />} />
          </Routes>
        </Router>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
