import React, { useState } from 'react'

import './App.scss'

// Component
import Header from 'components/Header/Header.js'
import Search from 'pages/Search/Search.js'
import User from 'pages/User/User.js'
import Detail from 'pages/Detail/Detail.js'
import Footer from 'components/Footer/Footer.js'

// UI
import Box from '@mui/material/Box'

// Plugin
import { UserContext } from './assets/js/ContextManager'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // User Context
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [publicRepoCount, setPublicRepoCount] = useState('')
  const [follows, setFollows] = useState('')
  const userContextData = {
    name,
    setName,
    avatar,
    setAvatar,
    publicRepoCount,
    setPublicRepoCount,
    follows,
    setFollows
  }

  return (
    <UserContext.Provider value={userContextData}>
      <Box
        sx={{
          backgroundColor: '#314464',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          minHeight: '100vh'
        }}>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            alignItems: 'center'
          }}>
          <Router>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/users/:username/repos" element={<User />} />
              <Route path="/users/:username/repos/:repo" element={<Detail />} />
            </Routes>
          </Router>
        </Box>

        <Footer />
      </Box>
    </UserContext.Provider>
  )
}

export default App
