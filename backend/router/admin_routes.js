import express from "express"
import submitAdminForm from "../controllers/submit_admin_form.js"
import verifyAdmin from "../middleware/verify_admin.js"
import getDashboardData from "../controllers/admin_dashboard.js"

const router = express.Router()

router.post("/login", submitAdminForm)
router.get("/dashboard", verifyAdmin, getDashboardData)

export default router
