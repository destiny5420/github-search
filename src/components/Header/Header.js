import React from 'react'
import { useNavigate } from 'react-router-dom'

// UI
import { Box, Paper, Typography, ButtonBase } from '@mui/material'

const Header = () => {
  const navigate = useNavigate()

  function handlerLogoClick() {
    navigate('/')
  }

  return (
    <>
      <Paper
        square={true}
        sx={{
          backgroundColor: '#415574',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
        variant="elevation"
        elevation={1}>
        <Box maxWidth={`760px`} margin={`0 auto`} padding={`0.5rem 1rem`}>
          <ButtonBase onClick={handlerLogoClick}>
            <Typography align="left" variant="h6">
              GITHUB SEARCH
            </Typography>
          </ButtonBase>
        </Box>
      </Paper>
    </>
  )
}

export default Header
