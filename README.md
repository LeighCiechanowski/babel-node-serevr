# Scaffold Babel Koa Node API

## Introduction

A scaffolded Node API which makes use of Koa, Babel, EsLint, Nodemon, Jest, Winston and Docker. 

## Dependencies
1. Node
2. Koa
3. Babel
4. EsLint
5. Nodemon
6. Jest
7. Winston
8. Docker

### Why?

#### Node
Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine.

#### Koa
TODO add

#### Babel
TODO add

#### EsLint
TODO add

#### Nodemon
TODO add

#### Jest
TODO add

#### Winston
TODO add

The default project here is setup to write to all logs with level `info` and below to `combined.log` and write all logs error (and below) to `error.log`.

If not in production it will log to the `console` with the format: `${info.level}: ${info.message} JSON.stringify({ ...rest }) `

#### Docker
TODO add

## Setting Up
1. Clone the repo.
2. `npm install`

To run the project in development mode, use `npm start`. The local endpoint is `http://localhost:1337/`.

To build the project for production, use `npm run build && npm run serve`.

## Tests

To run all test, use `npm run test`.

## Docker

To run the api in a docker container as a production build, use `docker-compose up --build`
