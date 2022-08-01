import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.js'
import reposReducer from './repos.js'

export default configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer
  }
})
