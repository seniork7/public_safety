import express from "express"
import submitVolunteerApplication from '../controllers/VolunteerApplications.js'

const router = express.Router()

router.post("/", submitVolunteerApplication)

export default router
