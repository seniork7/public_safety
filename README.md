# Public Safety

A full-stack web application for a community public safety organization. The site serves as a platform for sharing safety programs, spreading safety awareness through alerts, collecting volunteer applications and a private admin dashboard for managing those applications.

---

## What It Does

### Public site

- Introduces the organization's mission, vision, and core values
- Showcases active programs (Emergency Response, First Aid, Community Safety Workshops, and more)
- Publishes safety alerts that link to dedicated safety tip detail pages
- Allows community members to apply as volunteers through a multi-field application form
- Provides a contact form and department-level contact details

### Admin dashboard (`/admin`)

- Secure login with JWT-based session cookies
- Overview stats: total applications, pending reviews, approved volunteers, rejected applications
- View, approve, and reject individual volunteer applications
- Side panel with full applicant details and admin notes
- Role-based access: `Admin` role can approve/reject; `Demo_Admin` role is read-only

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, React Router v7, Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion (`motion/react`) |
| Icons | `react-icons` (Heroicons, Lucide) |
| Backend | Node.js, Express 5 |
| Database | MongoDB via Mongoose |
| Auth | JWT signed tokens stored in `httpOnly` session cookies |
| Deployment | Frontend → Netlify · Backend → Render |

---

## Auth & Permission Flow

1. Admin submits credentials to `POST /api/admin/login`
2. Server validates email/password against the `Admin` collection, signs a JWT, and sets an `httpOnly` cookie
3. All subsequent admin API calls (`/api/admin/*`) pass through the `verifyAdmin` middleware which verifies the cookie
4. `AuthContext` runs a `GET /api/admin/check-auth` on app load to restore session state
5. `ProtectedRoute` redirects unauthenticated users to `/admin/login`
6. Role check on `PATCH /api/admin/applications/:id` — `Admin` role required; `Demo_Admin` is blocked server-side (403) and client-side (modal)

---

## API Endpoints

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/api/volunteers` | None | Submit volunteer application |
| `POST` | `/api/contact` | None | Submit contact form message |
| `POST` | `/api/admin/login` | None | Admin login |
| `POST` | `/api/admin/logout` | None | Clear session cookie |
| `GET` | `/api/admin/check-auth` | `verifyAdmin` | Validate active session |
| `GET` | `/api/admin/dashboard_data` | `verifyAdmin` | Fetch all applications & stats |
| `PATCH` | `/api/admin/applications/:id` | `verifyAdmin` & Admin role | Approve or reject an application |

---

## Running Locally

### Backend

```bash
cd backend
npm install
# create a .env file with: PORT, MONGO_URI, JWT_SECRET, NODE_ENV
npm run dev       # nodemon server.js on port defined in .env
```

### Frontend

```bash
cd frontend
npm install
npm run dev       # Vite dev server on http://localhost:5173
```

---

## Deployment

- **Frontend:** [public-safety.netlify.app](https://public-safety.netlify.app)
- **Backend:** [public-safety.onrender.com](https://public-safety.onrender.com)
- **Live site:** [public-safety.kevonsenior.com](https://public-safety.kevonsenior.com)
