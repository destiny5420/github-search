import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../assets/js/ContextManager'

const User = () => {
  const { name } = useContext(UserContext)
  const { username } = useParams()

  console.log(`[USER] re-render`)

  return (
    <>
      <h1>UserName is {username}</h1>
      <p>Context Name: {name}</p>
    </>
  )
}

export default User
