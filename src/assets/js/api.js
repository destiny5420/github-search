async function fetchUserData(userName, token = null) {
  try {
    const jsonData = await fetch(
      `https://api.github.com/users/${userName}`,
      token
        ? {
            headers: {
              Authorization: `token ${token}`
            }
          }
        : null
    )
    const data = await jsonData.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while fetchUserData function, error message: `, error.message)
  }
}

async function getRepoList(repoAPI, token = null) {
  try {
    const jsonData = await fetch(
      repoAPI,
      token
        ? {
            headers: {
              Authorization: `token ${token}`
            }
          }
        : null
    )
    const data = await jsonData.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while getRepoList function, error message: `, error)
  }
}

async function getRepoList10(userName, page, token = null) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos?sort=created&per_page=10&page=${page}`,
      token
        ? {
            headers: {
              Authorization: `token ${token}`
            }
          }
        : null
    )
    const json = await response.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(json)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while getRepoList10 function, error message: `, error)
  }
}

async function getDetailRepo(userName, repo, token = null) {
  try {
    const jsonData = await fetch(
      `https://api.github.com/repos/${userName}/${repo}`,
      token
        ? {
            headers: {
              Authorization: `token ${token}`
            }
          }
        : null
    )
    const data = await jsonData.json()

    return new Promise((resolve, reject) => {
      try {
        resolve(data)
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    throw new Error(`Get error while getDetailRepo function, error message: `, error)
  }
}

export const FetchUserData = fetchUserData
export const GetRepoList = getRepoList
export const GetRepoList10 = getRepoList10
export const GetDetailRepo = getDetailRepo
