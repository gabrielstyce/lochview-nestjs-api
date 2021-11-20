# LochView API

> A api that servers to manage an hotel

### Features

- Nest.js
- Prisma
- Minimal
- TypeScript
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the database

```bash
# run the database on a container ("which is configured on docker-compose.yml")
$ database:run

# run the studio to visualize the tables
$ database:run:studio

# run migrations
$ database:run:migrations
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
