import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  avatar: '',
  publicRepoCount: 0,
  follows: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload
    },
    setPublicRepoCount: (state, action) => {
      state.publicRepoCount = action.payload
    },
    setFollows: (state, action) => {
      state.follows = action.payload
    }
  }
})

export const { setName, setAvatar, setPublicRepoCount, setFollows } = userSlice.actions
export default userSlice.reducer
