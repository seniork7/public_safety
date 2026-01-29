# Public Safety — Volunteer Landing Page

A full-stack project that presents public safety programs and collects volunteer applications. Built with React (frontend) and Node/Express + MongoDB (backend). Images are optimized via Cloudinary in production and UI motion is implemented with the motion/react library (motion) across the site.

---

## Goal

Build a responsive landing page to help communities learn about public safety and register as volunteers in their community.

---

## Architecture

- Frontend: React, Vite and Tailwind CSS. UI components live in `frontend/src/components/`. Pages in `frontend/src/pages/`.
- Backend: Express server exposing REST API endpoints in `backend/`. Routes call controllers which validate and persist data to MongoDB via Mongoose models.
- Images: Production images are served/optimized through Cloudinary.
- Animations: page & component entrance animations implemented with `motion/react` (used in HeroBanner, Home, Services, SafetyTips, Card and others).

---

## Repo Structure

- frontend/
  - src/components/ — shared UI components (Card, Header, HeroBanner, forms)
  - src/pages/ — pages (Home, Services, JoinUs, Contact, SafetyTips)
  - src/index.css — color variables
- backend/
  - controllers/ — request handling & business logic
  - middleware/ - handle logic for protected routes
  - models/ — Mongoose schemas for volunteers, contact forms, admin
  - router/ — Express routers wiring controllers to endpoints
  - database/ — MongoDB connection

---

## Backend flow

1. Express receives POST request at an endpoint (e.g. `/api/volunteers`).
2. Router delegates to a controller in `backend/controllers/submit_volunteer_applications.js`.
3. Controller validates input then uses a Mongoose model to save to MongoDB.
4. Controller returns JSON with status and frontend displays success/error message.

Example Express setup:

````javascript
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import volunteerRoutes from './router/volunteer_application_routes.js'
import contactRoutes from './router/contact_form_routes.js'
import connectDB from './database/app_db.js'

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: corsOrigin,
    credentials: true
}))
connectDB()

app.use('/api/volunteers', volunteerRoutes)     
app.use('/api/contact', contactRoutes)       
app.use('/api/admin', adminFormRoutes)

connectDB().catch(error => console.error('Database connection error', error))

app.get('/', (req, res) => res.send('Server is working!'))

app.listen(port, () => console.log(`Server running on port ${port}`)
)
````

## Deployment

- [Frontend](https://public-safety.netlify.app/)
- [Backend](https://public-safety.onrender.com/api/volunteers)

---

## Future Improvements

- Create UI for the admin dashboard to manage volunteers applications
- Improve accessibility accross the entire site
- Iteratively refactor components and application structure to improve scalability and maintainability.
