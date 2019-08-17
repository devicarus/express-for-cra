<h1 align="center">Welcome to express-for-cra 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> Express backend for your Create React App frontend

## Features

- Mongoose
- Nodemon dev server
- [Dynamic API routing](#routing)
- [Works with CRA app out-of-the-box](#create-react-app)
- Environment variables
- [File templates + generator script](#generator)

## Usage

```bash
# Clone the boilerplate
git clone https://github.com/DEVICARUS/express-for-cra.git

# Install dependencies
yarn

# Create React App in the client folder
create-react-app client

# Start development server (requires nodemon)
yarn run dev
```

## Commands

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `yarn run dev`       | Starts dev server with nodemon           |
| `yarn start`         | Starts production server                 |
| `yarn run generator` | Runs [file generator script](#generator) |

## Docs

### Routing

All files in the `routes` directory are automaticaly `required()` as Express routers, meaning all you have to do is to create a new file in this directory (take a look at the `users` example).

### Create React App

The production server pulls the app from the `client/build` folder, so remember to build your CRA-based app for the production. 

### Generator

The generator is a simple script for creating new Mongoose models (and other things) using the templates from the `templates` directory. Simply run `yarn run generator` to start using it.

**Currently supports**

- Mongoose models

- Express routes

## Author

👤 **DEVICARUS**

* Twitter: [@RevionReaper](https://twitter.com/RevionReaper)
* Github: [@DEVICARUS](https://github.com/DEVICARUS)

*Based on output of the [express-generator](https://github.com/expressjs/generator)*
