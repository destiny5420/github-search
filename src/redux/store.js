import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.js'
import reposReducer from './repos.js'
import repoReducer from './repo.js'

export default configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
    repo: repoReducer
  }
})
