import express from "express"
import submitAdminForm from "../controllers/submit_admin_form.js"
import verifyAdmin from "../middleware/verify_admin.js"
import getDashboardData from "../controllers/admin_dashboard.js"
import logoutAdmin from "../controllers/logout_admin.js"
import updateApplication from "../controllers/update_application.js"

const router = express.Router()

router.post("/login", submitAdminForm)
router.post("/logout", logoutAdmin)
router.get("/dashboard", verifyAdmin, getDashboardData)
router.patch("/applications/:id", verifyAdmin, updateApplication)
router.get("/check-auth", verifyAdmin, (req, res) => {
    res.json({
        user: {
            message: "Authenticated",
            role: req.admin.role,
            fName: req.admin.fName,
            lName: req.admin.lName,
        },
    })
})

export default router
