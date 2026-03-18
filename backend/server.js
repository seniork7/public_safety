import express from 'express'
import cors from 'cors'
import connectDB from './database/app_db.js'
import volunteerApplicationRoutes from './router/volunteer_application_routes.js'
import contactFormRoutes from './router/contact_form_routes.js'
import adminFormRoutes from './router/admin_routes.js'
import cookieParser from 'cookie-parser'

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())

// Allow trusting proxy headers in production
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

const corsOrigin = process.env.NODE_ENV === 'production'
    ? 'https://public-safety.kevonsenior.com'
    : 'http://localhost:5173'

app.use(cors({
    origin: corsOrigin,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))


app.use('/api/volunteers', volunteerApplicationRoutes)
app.use('/api/contact', contactFormRoutes)
app.use('/api/admin', adminFormRoutes)

connectDB().catch(error => console.error('Database connection error', error))

app.get('/', (req, res) => res.send('Server is working!'))

app.listen(port, () => console.log(`Server running on port ${port}`)
)