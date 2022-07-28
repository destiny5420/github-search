import React from 'react'
import { Box, Stack, Link, Typography } from '@mui/material'

const Footer = () => {
  const COPYRIGHT_TEXT = 'Copyright © Paper Hsiao'

  const socialMedias = [
    {
      key: 1,
      text: `Home`,
      link: `/`,
      target: `_self`
    },
    {
      key: 2,
      text: `Github`,
      link: `https://github.com/destiny5420`,
      target: `_blank`
    }
  ]

  const socialMediasElement = socialMedias.map((el) => {
    return (
      <Link
        key={el.key}
        href={el.link}
        variant="button"
        underline="hover"
        target={el.target}
        rel="noopener"
        sx={{
          color: `#1b1b1b`,
          display: 'flex',
          alignItems: `center`
        }}>
        <Typography align="center" paragraph={true}>
          {el.text}
        </Typography>
      </Link>
    )
  })

  return (
    <>
      <Box
        sx={{
          padding: '0 1rem'
        }}>
        <Box
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '760px'
          }}>
          <Stack spacing={2} direction="row">
            {socialMediasElement}
          </Stack>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `center`
            }}>
            <Typography align="right" paragraph={true}>
              {COPYRIGHT_TEXT}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
