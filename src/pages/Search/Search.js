import React, { useState, useEffect, useRef, useContext } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UserContext } from '../../assets/js/ContextManager'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { height, width } from '@mui/system'

const Search = () => {
  const searchName = useRef('destiny5420')
  const searchInputEl = useRef(null)

  const navigate = useNavigate()
  const { setName } = useContext(UserContext)

  async function getRepoList(repoAPI) {
    try {
      const jsonData = await fetch(repoAPI)
      const data = await jsonData.json()
      console.log(data)

      // navigate(`/users/${searchName.current}/repos`)
    } catch (error) {
      throw new Error(`Get error while getRepoList function, error message: `, error)
    }
  }

  async function fetchUserData(userName) {
    try {
      const jsonData = await fetch(`https://api.github.com/users/${userName}`)
      const data = await jsonData.json()
      console.log(data)
      setName(data.name)

      // navigate(`/users/${searchName.current}/repos`)
      getRepoList(data.repos_url)
    } catch (error) {
      throw new Error(`Get error while fetchUserData function, error message: `, error.message)
    }
  }

  function handlerSearch() {
    fetchUserData(searchName.current)
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
              // setSearchName(e.target.value)
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
