import express from "express"
import submitAdminForm from "../controllers/submit_admin_form.js"
import verifyAdmin from "../middleware/verify_admin.js"
import getDashboardData from "../controllers/admin_dashboard.js"
import logoutAdmin from "../controllers/logout_admin.js"
import updateApplication from "../controllers/update_application.js"
import AdminForm from "../models/admin_schema.js"
import getAdminProfile from "../controllers/get_admin_profile.js"
import updateAdminProfile from "../controllers/update_admin_profile.js"
import updateAdminPassword from "../controllers/update_admin_password.js"

const router = express.Router()

router.post("/login", submitAdminForm)
router.post("/logout", logoutAdmin)
router.get("/dashboard_data", verifyAdmin, getDashboardData)
router.patch("/applications/:id", verifyAdmin, updateApplication)
router.get("/profile", verifyAdmin, getAdminProfile)
router.patch("/profile", verifyAdmin, updateAdminProfile)
router.patch("/password", verifyAdmin, updateAdminPassword)
router.get("/check-auth", verifyAdmin, async (req, res) => {
    const admin = await AdminForm.findById(req.admin.id).select('email createdAt').lean()
    res.json({
        user: {
            message: "Authenticated",
            role: req.admin.role,
            fName: req.admin.fName,
            lName: req.admin.lName,
            email: admin?.email ?? null,
            createdAt: admin?.createdAt ?? null,
        },
    })
})

export default router
