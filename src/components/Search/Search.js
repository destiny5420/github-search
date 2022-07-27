import React, { useState, useEffect, useRef } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Search = () => {
  const searchName = useRef('')
  const searchInputEl = useRef(null)

  async function fetchUserData(userName) {
    const jsonData = await fetch(`https://api.github.com/users/${userName}`)
    const data = await jsonData.json()

    console.log(data)
  }

  function handlerSearch() {
    fetchUserData(searchName.current)
  }

  console.log(`re-render`)

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
