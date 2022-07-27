import React from 'react'
import Box from '@mui/material/Box'

const Footer = () => {
  const COPYRIGHT_TEXT = 'Copyright © Ricky Chuang 2022'
  return (
    <>
      <div>
        <span>Home</span>
        <span>Github</span>
      </div>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`
        }}>
        <p className="c-copyright">{COPYRIGHT_TEXT}</p>
      </Box>
    </>
  )
}

export default Footer
