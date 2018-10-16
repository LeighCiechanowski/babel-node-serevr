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
Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. https://nodejs.org/en

#### Koa
Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable. https://koajs.com

#### Babel
Transpile ES6 code to ES5 https://babeljs.io

#### EsLint
Reports syntax and style issues

#### Nodemon
Monitor for any changes in your node.js application and automatically restart the server - perfect for development http://nodemon.io

#### Jest
Zero configuration testing platform

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.

#### Winston
A versatile logging library for Node.js

https://github.com/winstonjs/winston

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
