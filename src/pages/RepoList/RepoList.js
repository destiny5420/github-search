import React, { useEffect, useRef, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Divider } from '@mui/material'
import Repo from 'components/Repo/Repo'
import { GetRepoList10 } from 'js/api.js'

const RepoList = () => {
  // State
  const [repoData, setRepoData] = useState([])
  const [page, setPage] = useState(1)

  // Ref
  const progressRef = useRef(null)

  const { username } = useParams()

  // Effect
  useEffect(() => {
    const work = async () => {
      const newRepoList = await GetRepoList10(username, page)

      setRepoData((old) => [...old, ...newRepoList])
    }

    work()
  }, [page])

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

  return (
    <>
      {repoData.length === 0 ? (
        <Typography
          textAlign={`center`}
          variant="h5"
          color={`#666666`}
          fontWeight={200}
          paddingY={`1rem`}>
          {`Haven't created any repository yet.`}
        </Typography>
      ) : (
        repoElements
      )}
    </>
  )
}

export default memo(RepoList)
