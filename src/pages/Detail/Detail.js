import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setRepoData, cantFindUser } from '@redux/repo'
import LanguageCircle from 'components/LanguageCircle/LanguageCircle'
import { GetDetailRepo } from 'js/api.js'

// UI
import { Box, Paper, Stack, Avatar, Typography, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import CloseIcon from '@mui/icons-material/Close'

const Detail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { username, repo } = useParams()
  const { name } = useSelector((state) => state.user)
  const { fullName, avatar, description, starCount, forkCount, languageType, htmlUrl } =
    useSelector((state) => state.repo)

  useEffect(() => {
    const work = async () => {
      const data = await GetDetailRepo(
        username,
        repo,
        process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
      )

      if (data.message && data.message === 'Not Found') {
        dispatch(cantFindUser())
        return
      }

      dispatch(setRepoData(data))
    }

    if (
      !fullName ||
      !avatar ||
      !description ||
      !starCount ||
      !forkCount ||
      !languageType ||
      !githubUrl ||
      !htmlUrl
    ) {
      work()
    }
  }, [])

  function handlerCloseBtn() {
    navigate(-1)
  }

  return (
    <>
      <Paper
        sx={{
          margin: '0.75rem auto',
          width: '90%',
          maxWidth: '760px',
          padding: '2rem',
          backgroundColor: '#fff',
          boxSizing: 'border-box'
        }}>
        <Box
          marginBottom={`1.5rem`}
          display={`flex`}
          flexDirection={`row`}
          justifyContent={`space-between`}
          alignItems={`center`}>
          <Stack direction={`row`} spacing={2}>
            <Avatar
              alt="avatar"
              variant="circular"
              src={avatar}
              sx={{
                width: '50px',
                height: '50px'
              }}
            />
            <Stack direction={`column`} justifyContent={`center`}>
              <Typography textAlign="left" variant="body2" color={`#444`}>
                {name}
              </Typography>
              <Typography textAlign="left" variant="body2" color="#999" fontWeight={200}>
                @{username}
              </Typography>
            </Stack>
          </Stack>
          <CloseIcon
            sx={{
              cursor: 'pointer'
            }}
            onClick={handlerCloseBtn}
          />
        </Box>
        <Box>
          <Typography marginBottom={`1rem`} textAlign={`left`} variant={`h5`} fontWeight={`500`}>
            {fullName}
          </Typography>
          <Typography marginBottom={`3rem`} textAlign={`left`} color={`#404040`}>
            {description ? description : `No description.`}
          </Typography>
        </Box>
        <Box display={`flex`} justifyContent={`space-between`}>
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
          <Link
            href={htmlUrl}
            target={`_blank`}
            color={`#000`}
            sx={{
              transition: `color 0.25s`,
              '&:hover': {
                color: '#00000075'
              }
            }}>
            <GitHubIcon />
          </Link>
        </Box>
      </Paper>
    </>
  )
}

export default Detail
