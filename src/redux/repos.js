import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: []
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setReposData: (state, action) => {
      state.datas = []
      state.datas = action.payload
    }
  }
})

export const { setReposData } = reposSlice.actions
export default reposSlice.reducer
