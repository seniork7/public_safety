# Public Safety — Volunteer Landing Page

A full-stack project designed to help communities learn about public safety programs and register as volunteers. Built with React, Node, Express, and MongoDB.

## Goal

Build a responsive landing page that communicates public safety initiatives and allows users to submit volunteer applications.

## Objective

- Create a landing page for public safety information
- Build an API that securely collects and stores volunteer applications
- Learn MongoDB and Mongoose for real database operations
- Gain deployment experience using cloud platforms such as Render (for hosting the backend) and MongoDB Atlas (for the database)

## Purpose

- Practice building a full-stack MERN-style application from scratch
- Strengthen React fundamentals (components, props, hooks)
- Learn MongoDB and Mongoose for real database operations
- Gain deployment experience with a cloud hosting provider

## Tech stack

Backend:

- [Node.js](https://nodejs.org/en): To run the server and handle requests
- [Express](https://expressjs.com/): For handling the API endpoints
- [CORS](https://expressjs.com/en/resources/middleware/cors.html): To enable others to access the API
- [MongoDB](https://www.mongodb.com/): For storing applications
- [Render](https://render.com/): To host the API

Frontend:

- [React](https://react.dev/): To create the user-interface
- JavaScript: For dynamic functionality
- [Tailwind CSS](https://v3.tailwindcss.com/): For modern, responsive styling

Repository layout (high level)

## Frontend Process

- Built a single-page landing site with sections for Home, About, Services, Join Us, and Contact
- Developed reusable UI components (buttons, cards, inputs) using Tailwind CSS
- Replaced Flowbite components with custom built versions for more control and better accessibility
- Integrated the API to submit volunteer information

## Backend Process

- The backend is an Express server that exposes an API endpoint which the frontend calls to submit volunteer applications
- I used MongoDB with Mongoose to define a schema for volunteer submissions and to save incoming data
- Even though I had coded a server before, this was my first time connecting to a database and performing CRUD operations

## API Endpoint

```js
POST /api/volunteers
```

## Deployment

- [Frontend](https://public-safety.netlify.app/)
- [Backend](https://public-safety.onrender.com/api/volunteers)

## Lessons Learned & Next Steps

### What I Learned

- How to structure and organize a React project
- Building a REST API to POST data
- Connecting Node/Express apps to MongoDB Atlas
- How deployment works for full-stack apps
- How to debug errors

### Future Improvements

- Add both client and server-side validation
- Add an admin dashboard to view/manage volunteer data
- Improve accessibility
