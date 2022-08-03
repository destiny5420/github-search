import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  findUser: true,
  name: '',
  avatar: '',
  publicRepoCount: 0,
  follows: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    cantFindUser: (state) => {
      state.findUser = false
      state.avatar = `https://pbs.twimg.com/profile_images/792371348114845697/YYKpi3s6_400x400.jpg`
    },
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

export const { setName, setAvatar, setPublicRepoCount, setFollows, cantFindUser } =
  userSlice.actions
export default userSlice.reducer
