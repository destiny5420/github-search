import React from 'react'
import { useNavigate } from 'react-router-dom'

// UI
import { Box, Paper, Typography, ButtonBase, Avatar, Stack } from '@mui/material'

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
          <Stack direction={`row`} alignItems={`center`} spacing={`0.5rem`}>
            <Avatar
              alt="avatar"
              variant={`square`}
              src={require(`images/logo.png`)}
              sx={{
                width: '20px',
                height: '20px'
              }}
            />
            <ButtonBase onClick={handlerLogoClick}>
              <Typography align="left" variant="h6">
                SEE YOU
              </Typography>
            </ButtonBase>
          </Stack>
        </Box>
      </Paper>
    </>
  )
}

export default Header
