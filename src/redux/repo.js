import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  findUser: true,
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
    cantFindUser: (state) => {
      state.findUser = false
      state.avatar = `https://pbs.twimg.com/profile_images/792371348114845697/YYKpi3s6_400x400.jpg`
      state.description = `Not found user.`
    },
    setRepoData: (state, action) => {
      const {
        full_name,
        description,
        stargazers_count,
        forks_count,
        language,
        owner,
        created_at,
        html_url
      } = action.payload

      const { avatar_url } = owner

      state.fullName = full_name
      state.avatar = avatar_url
      state.description = description
      state.starCount = stargazers_count
      state.forkCount = forks_count
      state.languageType = language
      state.htmlUrl = html_url
      state.date = created_at
    }
  }
})

export const { setRepoData, cantFindUser } = repoSlice.actions
export default repoSlice.reducer
