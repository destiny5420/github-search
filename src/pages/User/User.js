import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Stack, Avatar, Typography, Divider, Chip } from '@mui/material'
import { UserContext } from '../../assets/js/ContextManager'
import Repo from 'components/Repo/Repo'

const User = () => {
  const { name, avatar, publicRepoCount, follows } = useContext(UserContext)
  const { username } = useParams()

  console.log(`[USER] re-render`)

  return (
    <>
      <Paper
        sx={{
          margin: '0.75rem auto',
          width: '75%',
          maxWidth: '760px',
          padding: '0 1rem',
          backgroundColor: '#fff'
        }}>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            padding: '1rem 0'
          }}>
          <Stack spacing={5} direction="row">
            <Avatar
              alt="avatar"
              variant="circular"
              src={avatar}
              sx={{
                width: '100px',
                height: '100px'
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
              <Typography
                textAlign="left"
                variant="body2"
                sx={{
                  color: '#999',
                  fontWeight: 200
                }}>
                @{username}
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Stack spacing={2}>
              <Typography textAlign="left">
                {publicRepoCount} repos・{follows} followers
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Divider />
        <Repo title="note-app" starCount={10} forkCount={10} languageType="HTML" />
      </Paper>
    </>
  )
}

export default User
