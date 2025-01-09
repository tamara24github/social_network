# Social Network Project

A full-stack social network application built with Node.js, Express, PostgreSQL, React, and styled using Tailwind CSS.

## Project Overview

This project is a simple social network platform that supports user registration, login, and authentication using Passport.js with local and Google OAuth strategies. The backend is built with Node.js and Express, while the frontend is built with React and styled using Tailwind CSS.

## Tech Stack

- **General**:

- [Git](https://git-scm.com/) - Version control system
- [Prettier](https://prettier.io/) - Formatter
- [NPM](https://www.npmjs.com/) - Package manager

- **Frontend**:

- [React](https://react.dev/) - Framework
- [React Router](https://reactrouter.com/en/main) - Routing
- [Tailwindcss](https://tailwindcss.com/) - Style

- **Backend**:

- [Node](https://nodejs.org/en) - Runtime
- [PostgreSQL](https://www.postgresql.org/) - Database
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
- [Express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [Nodemon](https://www.npmjs.com/package/nodemon) - for automatic server restarts during development
- [Body-Parser](https://www.npmjs.com/package/body-parser) - for parsing incoming request bodies
- [Passport.js](https://www.passportjs.org/) - Authentication middleware
- [Google OAuth2](https://www.npmjs.com/package/passport-google-oauth2) - Google authentication
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Password hashing
- [Express-session](https://www.npmjs.com/package/express-session) - Session management
- [GitHub OAuth2](https://www.npmjs.com/package/passport-github2) - GitHub authentication

## Installation

Clone the repository:

```sh
git clone  https://github.com/tamara24github/social_network
cd social_network
```

**Install backend dependencies:**

```sh
cd backend
npm install
```

**Install frontend dependencies:**

```sh
cd frontend
npm install
```

**Set up environment variables by creating a .env file in the root directory.**

# Copy the .env.example to .env

cp .env.example .env

GOOGLE_CLIENT_ID= your_google_client_id - (from the Google Developer Console)
GOOGLE_CLIENT_SECRET= your_google_client_secret - (from the Google Developer Console)
GITHUB_CLIENT_ID= your_github_client_id (from GitHub OAuth application)
GITHUB_CLIENT_SECRET= your_github_client_secret (from GitHub OAuth application)
SESSION_SECRET= your_session_secret
PG_USER= your_db_user
PG_HOST= localhost
PG_DATABASE="social_network"
PG_PASSWORD= your_db_password
PG_PORT="5432"

**Run the backend:**

```sh
cd backend
nodemon server.js
```

**Run the frontend:**

```sh
cd frontend
npm start
```

**Development**
To start the development server for both frontend and backend, you will need to open two terminal windows and run both servers simultaneously.
