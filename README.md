<h1 align="center">
  <img alt="Upfi logo" src="./public/logo.svg" width="350px">
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstration">Demonstration</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/upfi" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/upfi" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/upfi" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/upfi" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/upfi" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/upfi" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/upfi/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/upfi/issues">Request feature</a>
</p>

<br />

## Description

Project was a challenge for the upload of images to work correctly, using faunaDb, imgBB and react query.

It consists of a website for uploading and viewing images, where the user can browse through their photos in a simple and suggestive way. For this application a lot of the ux aspect was used, which makes everything simpler and more beautiful for the user.

It was a very big challenge for me as it was one of the first times I worked with react query. Some fundamentals I'm still adapting, but it's an amazing tool that makes it possible to make the user experience even better, with a simple way of implementation. In addition to faunaDb and imgBB, which are incredible tools that allow you to make the front-end increasingly independent.

## Requirements

- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Nodejs](https://nodejs.org/en/)

## Technologies

- NextJs
- Typescript
- ChakraUI
- React query
- React hook form
- FaunaDb
- ImgBB
- Jest
- ESLint (Airbnb config)
- Prettier

## Usage

You can clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/upfi.git
cd upfi
```

Install dependencies using:

```bash
yarn
#or
npm install
```

Need to add environment variables:

```bash
# ./.env.local

# DEFAULT
NEXT_PUBLIC_IMGBB_API_KEY=
FAUNA_API_KEY=
```

Run web:

```bash
yarn dev
#or
npm run dev
```

## Demonstration

<img src="./.github/upfi-demo.gif" alt="Demo Upfi" width="100%" height="100%"/>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
