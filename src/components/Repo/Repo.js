import React from 'react'
import { Box, Stack, Typography, Divider, Chip } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import PropTypes from 'prop-types'
import LanguageCircle from 'components/LanguageCircle/LanguageCircle'
import { setRepoData } from '@redux/repo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetDetailRepo } from 'js/api.js'

const Repo = (props) => {
  const { userName, title, starCount, forkCount, languageType, description } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handlerClick() {
    const work = async () => {
      const data = await GetDetailRepo(
        userName,
        title,
        process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
      )
      dispatch(setRepoData(data))
      navigate(`/users/${userName}/repos/${data.name}`)
    }

    work()
  }

  return (
    <>
      <Stack
        onClick={handlerClick}
        sx={{
          paddingY: '2.5rem',
          paddingX: '1rem',
          cursor: 'pointer'
        }}>
        <Box display="flex" justifyContent="space-between" marginBottom="1rem">
          <Stack spacing={2} direction="row" alignItems="stretch">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500
              }}>
              {title}
            </Typography>
            <Box justifyContent="center" alignItems="center" display="flex">
              <Chip size="small" label="Public" variant="outlined" />
            </Box>
          </Stack>
          <Typography>27 Jul 2022</Typography>
        </Box>
        <Box marginBottom="1rem">
          <Typography color="#404040" textAlign="left">
            {description ? description : ` No description`}
          </Typography>
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
  userName: PropTypes.string,
  title: PropTypes.string,
  starCount: PropTypes.number,
  forkCount: PropTypes.number,
  languageType: PropTypes.string,
  description: PropTypes.string
}

export default Repo
