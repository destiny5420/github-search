import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Paper, Stack, Avatar, Typography, Divider, Button } from '@mui/material'
import { setName, setAvatar, setPublicRepoCount, setFollows, cantFindUser } from '@redux/user'
import { useSelector, useDispatch } from 'react-redux'
import RepoList from 'pages/RepoList/RepoList'
import { FetchUserData } from 'js/api.js'

const User = () => {
  const { username } = useParams()

  const { name, avatar, publicRepoCount, follows, findUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const work = async () => {
      const userData = await FetchUserData(
        username,
        process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
      )

      if (!userData) {
        dispatch(cantFindUser())
        return
      }

      dispatch(setName(userData.name))
      dispatch(setAvatar(userData.avatar_url))
      dispatch(setPublicRepoCount(userData.public_repos))
      dispatch(setFollows(userData.followers))
    }

    if ((!name || !avatar || !publicRepoCount || !follows) && findUser) {
      work()
    }
  }, [])

  function handlerFollowButton() {
    navigate('/')
  }

  return (
    <>
      <Paper
        sx={{
          margin: '0.75rem auto',
          width: '90%',
          maxWidth: '760px',
          padding: {
            xs: '0 1rem',
            sm: '0 2rem'
          },
          backgroundColor: '#fff',
          boxSizing: 'border-box'
        }}>
        <Stack
          spacing={{
            xs: 0,
            sm: 2
          }}
          direction="row"
          justifyContent={{
            xs: 'center',
            sm: 'flex-start'
          }}
          sx={{
            padding: '4rem 0'
          }}>
          <Stack
            spacing={{
              xs: 3,
              sm: 5
            }}
            direction={{
              xs: 'column',
              sm: 'row'
            }}>
            <Avatar
              alt="avatar"
              variant="circular"
              src={avatar}
              sx={{
                width: '150px',
                height: '150px'
              }}
            />
            <Stack justifyContent="center">
              <Typography textAlign="left" variant="h5" color={`#444`}>
                {name}
              </Typography>
              <Typography textAlign="left" variant="body2" color="#999" fontWeight={200}>
                @{username}
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body2" color="#999" fontWeight={200} textAlign="left">
                  {publicRepoCount} repos・{follows} followers
                </Typography>
              </Stack>
              {!findUser && (
                <Button
                  sx={{
                    marginTop: `1rem`
                  }}
                  onClick={handlerFollowButton}
                  variant="contained">
                  Search another User
                </Button>
              )}
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
        <Divider />
        <RepoList />
      </Paper>
    </>
  )
}

export default User
