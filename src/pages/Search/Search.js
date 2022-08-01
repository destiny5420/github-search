import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setName, setAvatar, setPublicRepoCount, setFollows } from '../../redux/user'
import { setReposData } from '../../redux/repos'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

async function fetchUserData(userName) {
  try {
    const jsonData = await fetch(`https://api.github.com/users/${userName}`)
    const data = await jsonData.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while fetchUserData function, error message: `, error.message)
  }
}

async function getRepoList(repoAPI) {
  try {
    const jsonData = await fetch(repoAPI)
    const data = await jsonData.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while getRepoList function, error message: `, error)
  }
}

const Search = () => {
  const searchName = useRef('destiny5420')
  const searchInputEl = useRef(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handlerSearch() {
    const work = async () => {
      const userData = await fetchUserData(searchName.current)
      dispatch(setName(userData.name))
      dispatch(setAvatar(userData.avatar_url))
      dispatch(setPublicRepoCount(userData.public_repos))
      dispatch(setFollows(userData.followers))

      const reposData = await getRepoList(userData.repos_url)
      dispatch(setReposData(reposData))
      navigate(`/users/${searchName.current}/repos`)
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
          <Button disableElevation={true} variant="contained" onClick={handlerSearch}>
            Search
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default Search
export const FetchUserData = fetchUserData
export const GetRepoList = getRepoList
