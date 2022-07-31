import React from 'react'
import { Box, Stack, Typography, Divider, Chip } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import PropTypes from 'prop-types'
import LanguageCircle from 'components/LanguageCircle/LanguageCircle'

const Repo = (props) => {
  const { title, starCount, forkCount, languageType } = props

  return (
    <>
      <Stack
        sx={{
          paddingY: '2.5rem',
          paddingX: '1rem'
        }}>
        <Box display="flex" justifyContent="space-between" marginBottom="0.5rem">
          <Stack spacing={2} direction="row" alignItems="stretch">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400
              }}>
              {title}
            </Typography>
            <Box justifyContent="center" alignItems="center" display="flex">
              <Chip size="small" label="Public" variant="outlined" />
            </Box>
          </Stack>
          <Typography>27 Jul 2022</Typography>
        </Box>
        <Box>
          <Stack spacing={2} direction="row">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography display="flex" justifyContent="center" alignItems="center">
                <StarBorderIcon fontSize="small" />
              </Typography>
              <Typography display="flex" justifyContent="center" alignItems="center">
                {starCount}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography display="flex" justifyContent="center" alignItems="center">
                <ForkRightIcon fontSize="small" />
              </Typography>
              <Typography display="flex" justifyContent="center" alignItems="center">
                {forkCount}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <LanguageCircle type={languageType} />
              <Typography display="flex" justifyContent="center" alignItems="center">
                {languageType}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Divider />
    </>
  )
}

Repo.propTypes = {
  title: PropTypes.string,
  starCount: PropTypes.number,
  forkCount: PropTypes.number,
  languageType: PropTypes.string
}

export default Repo
