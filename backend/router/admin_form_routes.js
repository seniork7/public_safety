import express from "express"
import submitAdminForm from "../controllers/submit_admin_form.js"

const router = express.Router()

router.post("/", submitAdminForm)

export default router
