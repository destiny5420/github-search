# Dcard Web Intern Homework

[![license - MIT](https://img.shields.io/badge/license-MIT-2ea44f)](https://github.com/destiny5420/github-search/blob/master/LICENSE)
![GitHub repo size](https://img.shields.io/github/repo-size/destiny5420/github-search)
![GitHub Repo stars](https://img.shields.io/github/stars/destiny5420/github-search)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_message=online&url=https%3A%2F%2Fgithub-search-service.stackergames.org%2F)

This is a homework from startup company from taiwan for interview intern front-end developer.

The [**React**](https://reactjs.org/) app designed with Material UI that could:

- search users/organizations on [GitHub](https://github.com)
- read repository's detail from [Github REST API](https://docs.github.com/en/rest)

<img src="https://github.com/destiny5420/github-search/blob/master/.github/assets/demo.gif" width='100%' height='100%'/>

> Doc：[Dcard 2022 Web Frontend Intern Homework.pdf](https://github.com/destiny5420/github-search/blob/master/.github/file/2022%20Web%20Frontend%20Intern%20Homework.pdf)

## Overview

1. [**How to use**](https://github.com/destiny5420/github-search#how-to-use)
   - [On AWS S3](https://github.com/destiny5420/github-search#on-aws-s3)
   - [On Your Computer](https://github.com/destiny5420/github-search#on-your-computer)
2. [**Architecture Design & Explanation**](https://github.com/destiny5420/github-search#architecture-design--explanation)
   - [App.js](https://github.com/destiny5420/github-search#appjsfor-direct-route)：for direct route
   - [Search.js](https://github.com/destiny5420/github-search#searchjssearch-github-repository-by-username)：search github repository by username
   - [User.js](https://github.com/destiny5420/github-search#userjsfor-display-gitHub-user-information-all-public-repositories)：for display GitHub user information & all public repositories
   - [Detail.js](https://github.com/destiny5420/github-search#detailjsfor-display-repository-details)：For display repository details
3. [**Learn More**](https://github.com/destiny5420/github-search#learn-more)
   - [Rate Link](https://github.com/destiny5420/github-search#rate-limit)
   - [Responsive Web Design](https://github.com/destiny5420/github-search#responsive-web-design)
4. [**LICENSE:MIT**](https://github.com/destiny5420/github-search#licensemit)

## How to use

### On AWS S3

🚀 This app had deployed on AWS S3 bucket, And use [Cloudflare](https://www.cloudflare.com/) to handle the CDN

### On Your Computer

1. You should have downloaded [Node.js](https://nodejs.org/en/) before (Node >= 14.0.0 & npm >=5.6)
2. Download this repository via `git clone`

```shell
git clone https://github.com/destiny5420/github-search.git
```

3. Change directories

```shell
cd github-search
```

4. Install related packages using yarn or npm

```shell
npm install

or

yarn install
```

5. Run app

```shell
npm dev

or

yarn dev
```

http://localhost:3000 will automatically open on your computer.

## Architecture Design & Explanation

### [App.js](https://github.com/destiny5420/github-search/blob/master/src/App.js)：for direct route

- [Search](https://github.com/destiny5420/github-search/blob/master/src/pages/Search/Search.js)：route a `/`
- [User](https://github.com/destiny5420/github-search/blob/master/src/pages/User/User.js)：route a `/users/{username}/repos`
- [Detail](https://github.com/destiny5420/github-search/blob/master/src/pages/Detail/Detail.js)：route a `/users/{username}/repos/{repo}`

```jsx
// App.js
return (
  ...
  <Routes>
    <Route path="/" element={<Search />} />
    <Route path="/users/:username/repos" element={<User />} />
    <Route path="/users/:username/repos/:repo" element={<Detail />} />
  </Routes>
  ...
)
```

### [Search.js](https://github.com/destiny5420/github-search/blob/master/src/pages/Search/Search.js)：search github repository by username

<img src="https://github.com/destiny5420/github-search/blob/master/.github/assets/search-bar.png" width='100%' height='100%'/>

1. SearchBar
   - user can input username for he want to search repository
   - can't submit if there's not input
   - user `useRef()` to prevent re-render while user is typing
   - store data that fetch from API in [Redux](https://redux.js.org/) to prevent API recall if we need the same data later

### [User.js](https://github.com/destiny5420/github-search/blob/master/src/pages/User/User.js)：for display GitHub user information & all public repositories

<img src="https://github.com/destiny5420/github-search/blob/master/.github/assets/user.jpg" width='100%' height='100%'/>

1. User Component

- first check data we need had already saved in Redux store
  - if yes, get data from store
  - if no, fetch data from API and save to store
    - GitHub User: `GET /users/{username}`
    - Repos: `GET /users/{username}/repos`

2. RepoList Component

- use `useRef()` & [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to achieve infinite scroll feature

<img src="https://github.com/destiny5420/github-search/blob/master/.github/assets/infinite-scroll.png" width='100%' height='100%'/>

- we fetch 10 pieces of data each times then store in redux store, so when user got to `Detail` and back, we won't re-fetch data from API

### [Detail.js](https://github.com/destiny5420/github-search/blob/master/src/pages/Detail/Detail.js)：For display repository details

<img src="https://github.com/destiny5420/github-search/blob/master/.github/assets/detail.png" width='100%' height='100%'/>

## Learn More

### Rate Limit

With access tokens, GitHub Rest API Rate Limit could up to 5000 requests pre hour, if no, jate Limit only up to 60 requests pre hour! [For more information](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

### Responsive Web Design

🧀 Thanks to [Material UI](https://mui.com/)

## License：MIT

This package is [MIT licensed](https://github.com/destiny5420/github-search/blob/master/LICENSE).
