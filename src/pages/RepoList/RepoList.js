import React, { useEffect, useRef, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Repo from 'components/Repo/Repo'
import { GetRepoList10 } from 'js/api.js'
import { Box, Typography, Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const RepoList = () => {
  // State

  const [repoData, setRepoData] = useState([])
  const [page, setPage] = useState(1)

  // Ref
  const progressRef = useRef(null)
  const fetchDataDone = useRef(true)

  // Redux
  const { publicRepoCount } = useSelector((state) => state.user)

  const { username } = useParams()

  // Effect
  useEffect(() => {
    const fetchRepoDataBy10 = async () => {
      try {
        fetchDataDone.current = false

        const newRepoList = await GetRepoList10(
          username,
          page,
          process.env.REACT_APP_GITHUB_READ_PROJECT_TOKEN
        )

        if (!newRepoList) {
          return
        }

        setRepoData((old) => [...old, ...newRepoList])
      } catch (error) {
        console.error(error)
      } finally {
        fetchDataDone.current = true
      }
    }

    fetchRepoDataBy10()
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < publicRepoCount && fetchDataDone.current) {
          setPage(page + 1)
        }
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      observer.disconnect()
    }
  })

  // Dom Element
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
          createAt={data.created_at}
        />
        {repoData.length - 1 !== index && <Divider />}
      </Box>
    )
  })

  console.log(`[REPO-LIST] re-render`)

  return repoData.length > 0 ? (
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
