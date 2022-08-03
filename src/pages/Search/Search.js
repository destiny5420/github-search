import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setName, setAvatar, setPublicRepoCount, setFollows, cantFindUser } from '@redux/user'
import { initReposData } from '@redux/repos'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { FetchUserData, GetRepoList } from 'js/api.js'

const Search = () => {
  const [searching, setSearching] = useState(false)

  const searchName = useRef('')
  const searchInputEl = useRef(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const onKeyUp = function (e) {
      switch (e.keyCode) {
        case 13:
          handlerSearch()
          break
      }
    }

    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keyup', onKeyUp)
    }
  })

  function handlerSearch() {
    if (!searchName.current) {
      return
    }

    if (searching) {
      return
    }

    setSearching(true)
    dispatch(initReposData())

    const work = async () => {
      try {
        const userData = await FetchUserData(
          searchName.current,
          process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
        )

        if (!userData) {
          dispatch(cantFindUser())

          navigate(`/users/${searchName.current}/repos`)
          return
        }

        dispatch(setName(userData.name))
        dispatch(setAvatar(userData.avatar_url))
        dispatch(setPublicRepoCount(userData.public_repos))
        dispatch(setFollows(userData.followers))

        navigate(`/users/${searchName.current}/repos`)
      } catch (error) {
        console.error(error)
      } finally {
        setSearching(false)
      }
    }

    work()
  }

  console.log(`[SEARCH] re-render`)

  return (
    <>
      <Box
        sx={{
          margin: '0.75rem auto',
          width: '100%',
          maxWidth: '760px',
          padding: '0 1rem'
        }}>
        <Stack spacing={2} direction="row">
          <TextField
            id="filled-basic"
            onChange={(e) => {
              searchName.current = e.target.value
            }}
            label="Github user name"
            color="primary"
            variant="outlined"
            fullWidth={true}
            ref={searchInputEl}
            sx={{
              backgroundColor: '#2c405e'
            }}
          />
          <Button
            disabled={searching ? true : false}
            disableElevation={true}
            variant="contained"
            onClick={handlerSearch}>
            Search
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default Search
