import express from 'express'
import cors from 'cors'
import connectDB from '../database/app_db.js'
import volunteerApplicationRoutes from '../router/volunteer_application_routes.js'
import contactFormRoutes from '../router/contact_form_routes.js'

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/volunteers', volunteerApplicationRoutes)
app.use('/api/contact', contactFormRoutes)

connectDB().catch(error => console.error('Database connection error', error))

app.get('/', (req, res) => res.send('Server is working!'))

app.listen(port, () => console.log(`Server running on port ${port}`)
)