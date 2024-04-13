# MARVEL'S FAVORITES

https://zara-web-challenge-adrian-cuadrado.vercel.app/

## How to execute

First go to https://developer.marvel.com/account and get a public and private keys. You might have to create an account for this.

Next you have to create a `.env.local` file and edit it to include the keys, as specified in `.env`:

```
NEXT_PUBLIC_KEY=<YOUR PUBLIC API KEY>
PRIVATE_KEY=<YOUR PRIVATE API KEY>
```

Install dependencies:

```sh
npm install
```

Execute in dev mode:

```sh
npm run dev
```

Execute in prod mode:

```sh
npm run build
npm run start
```

Execute the tests:

```sh
npm test
```

Execute linter:

```sh
npm run lint
```

## Used frameworks and libraries

- ReactJS
- NextJS
- Jest

## Proyect structure

```
src/
├── api.js
├── app
│   ├── favicon.ico
│   ├── favorites
│   │   └── page.jsx
│   ├── global.css
│   ├── [id]
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── layout.jsx
│   ├── layout.module.css
│   ├── page.jsx
│   └── page.module.css
├── components
│   ├── Banner
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Card
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Comic
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── ComicCarousel
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── ExternalImage
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Heart
│   │   ├── constants.js
│   │   ├── empty-heart.svg
│   │   ├── empty-thick-heart.svg
│   │   ├── full-heart.svg
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── HeartCounter
│   │   ├── index.jsx
│   │   └── index.module.css
│   ├── Logo
│   │   ├── index.jsx
│   │   └── logo.svg
│   ├── Results
│   │   ├── index.jsx
│   │   └── index.module.css
│   └── Search
│       ├── index.jsx
│       ├── index.module.css
│       └── magnifying-glass.svg
├── state
│   ├── characters
│   │   ├── Context.jsx
│   │   ├── Provider.jsx
│   │   └── reducer.js
│   └── favorites
│       ├── Context.jsx
│       ├── Provider.jsx
│       └── reducer.js
└── utils
    ├── formatters.js
    └── getServerSideQueryParams.js
```
