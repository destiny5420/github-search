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
   - [index.js]

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
