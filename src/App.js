import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Css
import './App.scss'

// Component
import Header from 'components/Header/Header.js'
import Search from 'pages/Search/Search.js'
import User from 'pages/User/User.js'
import Detail from 'pages/Detail/Detail.js'
import Footer from 'components/Footer/Footer.js'

// UI
import Box from '@mui/material/Box'

// Custom
import Console from 'js/utils/console.js'

function App() {
  useEffect(() => {
    Console()
  }, [])

  console.log(`[APP] re-render`)

  return (
    <Box
      sx={{
        backgroundColor: '#314464',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: '100vh'
      }}>
      <Router>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            alignItems: 'center'
          }}>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/users/:username/repos" element={<User />} />
            <Route path="/users/:username/repos/:repo" element={<Detail />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
