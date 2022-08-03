import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  findRepos: true,
  datas: [],
  page: 0
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    cantFindRepos: (state) => {
      state.findRepos = false
    },
    initReposData: (state) => {
      state.datas = []
      state.page = 0
      state.findRepos = true
    },
    setReposData: (state, action) => {
      state.datas = action.payload
    },
    addReposData: (state, action) => {
      state.datas = [...state.datas, ...action.payload.data]
      state.page = action.payload.page
    }
  }
})

export const { initReposData, setReposData, addReposData, cantFindRepos } = reposSlice.actions
export default reposSlice.reducer
