import React from 'react'

// UI
import { Paper, Typography } from '@mui/material'

const Header = () => {
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
        <Typography
          align="left"
          variant="h6"
          sx={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '0.5rem 1rem'
          }}>
          GITHUB SEARCH
        </Typography>
      </Paper>
    </>
  )
}

export default Header
