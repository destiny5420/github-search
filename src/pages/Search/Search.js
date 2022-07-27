import React, { useState, useEffect, useRef } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const searchName = useRef('destiny5420')
  const searchInputEl = useRef(null)

  const navigate = useNavigate()

  async function getRepoList(repoAPI) {
    try {
      const jsonData = await fetch(repoAPI)
      const data = await jsonData.json()
      console.log(data)

      navigate(`/users/${searchName.current}/repos`)
    } catch (error) {
      throw new Error(`Get error while getRepoList function, error message: `, error)
    }
  }

  async function fetchUserData(userName) {
    try {
      const jsonData = await fetch(`https://api.github.com/users/${userName}`)
      const data = await jsonData.json()

      getRepoList(data.repos_url)
    } catch (error) {
      throw new Error(`Get error while fetchUserData function, error message: `, error)
    }
  }

  function handlerSearch() {
    fetchUserData(searchName.current)
  }

  console.log(`[SEARCH] re-render`)

  return (
    <>
      <div>
        <Stack spacing={2} direction="row">
          <TextField
            id="filled-basic"
            onChange={(e) => {
              searchName.current = e.target.value
              // setSearchName(e.target.value)
            }}
            label="Github username"
            variant="filled"
            ref={searchInputEl}
          />
          <Button variant="contained" onClick={handlerSearch}>
            Search
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default Search
