<h1 align="center">Welcome to express-for-cra 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Express server for Create React App frontend

## Features
- Mongoose
- Nodemon dev server
- [Dynamic API routing](#routing)
- Works with CRA app out-of-the-box
- Environment variables

## Usage

```bash
# Clone the boilerplate
git clone https://github.com/DEVICARUS/express-for-cra.git

# Install dependencies
yarn

# Start development server (requires nodemon)
yarn run dev

# Start production server
yarn start
```

## Docs

### Routing

All files in the `routes` directory are automaticaly `required()` as Express routers, meaning all you have to do is to create a new file in this directory (take a look at the `users` example).

## Author

👤 **DEVICARUS**

* Twitter: [@RevionReaper](https://twitter.com/RevionReaper)
* Github: [@DEVICARUS](https://github.com/DEVICARUS)

*Based on output of the [express-generator](https://github.com/expressjs/generator)*
