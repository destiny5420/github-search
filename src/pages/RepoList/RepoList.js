import React, { useEffect, useRef, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addReposData, cantFindRepos } from '@redux/repos'

import Repo from 'components/Repo/Repo'
import { GetRepoList10 } from 'js/api.js'

// UI
import { Box, Typography, Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const RepoList = () => {
  // Ref
  const progressRef = useRef(null)
  const fetchDataDone = useRef(true)

  // Redux
  const dispatch = useDispatch()
  const { publicRepoCount, findUser } = useSelector((state) => state.user)
  const { datas, page, findRepos } = useSelector((state) => state.repos)

  // Router
  const { username } = useParams()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < publicRepoCount && fetchDataDone.current) {
          fetchRepoDataBy10(page + 1)
        }
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    )

    if (datas.length === 0) {
      fetchRepoDataBy10(page + 1)
    }

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      observer.disconnect()
    }
  })

  // Custom
  async function fetchRepoDataBy10(requiredPage) {
    try {
      if (!findUser) return

      if (!findRepos) return

      if (!fetchDataDone.current) return

      fetchDataDone.current = false

      const newRepoList = await GetRepoList10(
        username,
        requiredPage,
        process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
      )

      if (newRepoList.message && newRepoList.message === 'Not Found') {
        dispatch(cantFindRepos())
        return
      }

      dispatch(addReposData({ data: newRepoList, page: requiredPage }))
    } catch (error) {
      console.error(error)
    } finally {
      fetchDataDone.current = true
    }
  }

  // Dom Element
  const repoElements = datas.map((data, index) => {
    return (
      <Box key={data.id}>
        <Repo
          userName={username}
          title={data.name}
          starCount={data.stargazers_count}
          forkCount={data.forks_count}
          languageType={data.language}
          description={data.description}
          createAt={data.created_at}
        />
        {datas.length - 1 !== index && <Divider />}
      </Box>
    )
  })

  return datas.length > 0 ? (
    <>
      {repoElements}
      {10 * page < publicRepoCount && (
        <Box display={`flex`} justifyContent={`center`} marginBottom={`1rem`}>
          <CircularProgress ref={progressRef} />
        </Box>
      )}
    </>
  ) : (
    <Typography
      textAlign={`center`}
      variant="h5"
      color={`#666666`}
      fontWeight={200}
      paddingY={`1rem`}>
      {`Haven't created any repository yet.`}
    </Typography>
  )
}

export default memo(RepoList)
