import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  avatar: '',
  description: '',
  starCount: 0,
  forkCount: 0,
  languageType: '',
  githubUrl: '',
  date: ''
}

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setRepoData: (state, action) => {
      const { full_name, description, stargazers_count, forks_count, language, owner, created_at } =
        action.payload

      const { html_url, avatar_url } = owner

      state.fullName = full_name
      state.avatar = avatar_url
      state.description = description
      state.starCount = stargazers_count
      state.forkCount = forks_count
      state.languageType = language
      state.githubUrl = html_url
      state.date = created_at
    }
  }
})

export const { setRepoData } = repoSlice.actions
export default repoSlice.reducer
