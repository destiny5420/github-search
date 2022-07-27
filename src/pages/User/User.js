import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { username } = useParams()

  console.log(`[USER] re-render`)

  return <h1>UserName is {username}</h1>
}

export default User
