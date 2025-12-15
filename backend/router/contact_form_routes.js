import express from "express"
import submitContactForm from "../controllers/submit_contact_form.js"

const router = express.Router()

router.post("/", submitContactForm)

export default router
