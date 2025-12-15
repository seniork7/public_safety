import express from "express"
import submitVolunteerApplication from '../controllers/submit_volunteer_applications.js'

const router = express.Router()

router.post("/", submitVolunteerApplication)

export default router
