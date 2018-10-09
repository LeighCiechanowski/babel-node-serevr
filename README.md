# Example Babel Koa Node API

## Introduction

Here is what I would start with when building a Koa API

### Why?

Because I cannot be bothered to scaffold out evrey api everytime and this is all setup with:

1. Babel code transpiling so you can utilise ES6
2. Linting
3. Building prod ready code
4. Jest tests setup good to go
5. Nodemon
6. Koa, Koa-route and koa-bodyparser
6. Winston Logging
7. Config setup

## Setting Up
1. Clone the repo.
2. `npm install`

To run the project in development mode, use `npm run dev`. The local endpoint is `http://localhost:1337/`.

To build the project for production, use `npm run build && npm run serve`.

## Tests
`npm run test`.
