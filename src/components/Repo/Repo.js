import React, { useMemo } from 'react'
import { Box, Stack, Typography, Chip } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import PropTypes from 'prop-types'
import LanguageCircle from 'components/LanguageCircle/LanguageCircle'
import { setRepoData } from '@redux/repo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetDetailRepo } from 'js/api.js'

const Repo = (props) => {
  const { userName, title, starCount, forkCount, languageType, description, createAt } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createAtDate = useMemo(() => formatDate(createAt), [createAt])

  function formatDate(createAt) {
    const formatMonth = (month) => {
      switch (month) {
        case '01':
          return 'Jan'
        case '02':
          return 'Feb'
        case '03':
          return 'Mar'
        case '04':
          return 'Apr'
        case '05':
          return 'May'
        case '06':
          return 'Jun'
        case '07':
          return 'Jul'
        case '08':
          return 'Aug'
        case '09':
          return 'Sep'
        case '10':
          return 'Oct'
        case '11':
          return 'Nov'
        case '12':
          return 'Dec'
        default:
          return 'Jan'
      }
    }

    const splitAry = createAt.split('T')[0].split('-')
    const year = splitAry[0]
    const month = formatMonth(splitAry[1])
    const date = parseInt(splitAry[2])

    return `${date} ${month} ${year}`
  }

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

  console.log(`[REPO] re-render`)
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
          <Typography
            textAlign={`right`}
            display={`flex`}
            flexDirection={`column`}
            justifyContent={`center`}
            variant={`caption`}
            color={`#827c7c`}>
            {createAtDate}
          </Typography>
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
    </>
  )
}

Repo.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  starCount: PropTypes.number,
  forkCount: PropTypes.number,
  languageType: PropTypes.string,
  description: PropTypes.string,
  createAt: PropTypes.string
}

export default Repo
