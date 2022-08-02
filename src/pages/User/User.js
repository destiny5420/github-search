import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Stack, Avatar, Typography, Divider, Button } from '@mui/material'
import { setName, setAvatar, setPublicRepoCount, setFollows } from '@redux/user'
import { setReposData } from '@redux/repos'
import { useSelector, useDispatch } from 'react-redux'
import Repo from 'components/Repo/Repo'
import { FetchUserData, GetRepoList, GetRepoList10 } from 'js/api.js'

const User = () => {
  const { username } = useParams()
  const progressRef = useRef(null)
  const [page, setPage] = useState(1)
  const [repoData, setRepoData] = useState([])
  const { name, avatar, publicRepoCount, follows } = useSelector((state) => state.user)
  const { datas } = useSelector((state) => state.repos)
  const dispatch = useDispatch()

  useEffect(() => {
    const work = async () => {
      const userData = await FetchUserData(
        username,
        process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
      )
      dispatch(setName(userData.name))
      dispatch(setAvatar(userData.avatar_url))
      dispatch(setPublicRepoCount(userData.public_repos))
      dispatch(setFollows(userData.followers))
    }

    if (!name || !avatar || !publicRepoCount || !follows) {
      work()
    }
  }, [])

  useEffect(() => {
    const work = async () => {
      const newRepoList = await GetRepoList10(username, page)
      setRepoData((old) => [...old, ...newRepoList])
    }

    work()
  }, [page])

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log(`entries: `, entries)
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0
  //     }
  //   )
  // })

  function handlerLoadNewData() {
    console.log(`handlerLoadNewData`)
    setPage((old) => old + 1)
  }

  const repoElements = repoData.map((data, index) => {
    return (
      <Box key={data.id}>
        <Repo
          userName={username}
          title={data.name}
          starCount={data.stargazers_count}
          forkCount={data.forks_count}
          languageType={data.language}
          description={data.description}
        />
        {repoData.length - 1 !== index && <Divider />}
      </Box>
    )
  })

  console.log(`[USER] re-render`)

  return (
    <>
      <Paper
        sx={{
          margin: '0.75rem auto',
          width: '90%',
          maxWidth: '760px',
          padding: '0 2rem',
          backgroundColor: '#fff'
        }}>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            padding: '4rem 0'
          }}>
          <Stack spacing={5} direction="row">
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
              <Stack spacing={2} marginBottom="1rem">
                <Typography variant="body2" color="#999" fontWeight={200} textAlign="left">
                  {publicRepoCount} repos・{follows} followers
                </Typography>
              </Stack>
              <Button onClick={handlerLoadNewData} variant="contained">
                Follow
              </Button>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
        <Divider />
        {repoElements}
      </Paper>
    </>
  )
}

export default User
