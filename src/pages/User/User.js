import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Stack, Avatar, Typography, Divider, Button } from '@mui/material'
import { setName, setAvatar, setPublicRepoCount, setFollows } from '../../redux/user'
import { setReposData } from '../../redux/repos'
import { useSelector, useDispatch } from 'react-redux'
import Repo from 'components/Repo/Repo'
import { FetchUserData, GetRepoList } from '../Search/Search'

const User = () => {
  const { username } = useParams()
  const { name, avatar, publicRepoCount, follows } = useSelector((state) => state.user)
  const { datas } = useSelector((state) => state.repos)
  const dispatch = useDispatch()

  useEffect(() => {
    const work = async () => {
      const userData = await FetchUserData(username)

      dispatch(setName(userData.name))
      dispatch(setAvatar(userData.avatar_url))
      dispatch(setPublicRepoCount(userData.public_repos))
      dispatch(setFollows(userData.followers))

      const reposData = await GetRepoList(userData.repos_url)
      dispatch(setReposData(reposData))
      // navigate(`/users/${username}/repos`)
    }

    if (!name || !avatar || !publicRepoCount || !follows) {
      console.log(`fetch data flow.`)
      work()
    }
  }, [])

  const repoElements = datas.map((data) => {
    return (
      <Repo
        key={data.id}
        title={data.name}
        starCount={data.stargazers_count}
        forkCount={data.forks_count}
        languageType={data.language}
        description={data.description}
        url={data.url}
      />
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
              <Typography
                textAlign="left"
                variant="h5"
                sx={{
                  color: '#444'
                }}>
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
              <Button variant="contained">Follow</Button>
            </Stack>
          </Stack>
          <Box></Box>
        </Stack>
        <Divider />
        {repoElements}
        {/* <Repo title="note-app" starCount={10} forkCount={10} languageType="HTML" /> */}
      </Paper>
    </>
  )
}

export default User
