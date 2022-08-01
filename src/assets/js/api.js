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
export const GetDetailRepo = getDetailRepo
