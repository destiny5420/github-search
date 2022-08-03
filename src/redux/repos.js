import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: [],
  page: 0
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    initReposData: (state) => {
      state.datas = []
      state.page = 0
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

export const { initReposData, setReposData, addReposData } = reposSlice.actions
export default reposSlice.reducer
