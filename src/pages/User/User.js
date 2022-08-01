import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Stack, Avatar, Typography, Divider, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import Repo from 'components/Repo/Repo'

const User = () => {
  const { username } = useParams()
  const { name, avatar, publicRepoCount, follows } = useSelector((state) => state.user)
  const { datas } = useSelector((state) => state.repos)

  console.log(`follows: ${follows}`)

  console.log(`[USER] re-render`)

  const repoElements = datas.map((data) => {
    return (
      <Repo
        key={data.id}
        title={data.name}
        starCount={data.stargazers_count}
        forkCount={data.forks_count}
        languageType={data.language}
        description={data.description}
      />
    )
  })

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
