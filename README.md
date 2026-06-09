# Team Task Manager

A full-stack MERN task management application for creating tasks, assigning work, and tracking progress across a team.

## Features

- Create and manage team tasks
- Assign tasks to users
- Track task status across pending and completed work
- Separate frontend and backend application structure
- MongoDB-backed data storage

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Deployment | Vercel, Railway |

## Project Structure

```text
.
├── backend/
├── frontend/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file for local development. Never commit real credentials.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_local_secret
```

## Run Locally

Install backend dependencies:

```bash
cd backend
npm install
npm start
```

Install frontend dependencies:

```bash
cd frontend
npm install
npm start
```

## Portfolio Notes

This project demonstrates full-stack application structure, API integration, CRUD workflows, and basic team productivity features. For data analyst roles, this repository should stay unpinned unless it is extended with reporting dashboards, task completion metrics, and productivity analytics.

## Author

Nitesh Kumar
