import express from 'express'
import cors from 'cors'
import connectDB from '../database/app_db.js'
import ApplicationForm from '../database/shema.js'

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

connectDB().catch(error => console.error('Database connection error', error)
)

app.get('/', (req, res) => res.send('Server is working!'))

app.post('/api/volunteers', async (req, res) => {
  try {
    const newApplicant = await ApplicationForm.create(req.body)
    res.status(201).json({ success: true, data: newApplicant })
  }catch(error) {
    res.status(400).json({ success: false, error: error.message })
  }
})

app.listen(port, () => console.log(`Server running on port ${port}`)
)