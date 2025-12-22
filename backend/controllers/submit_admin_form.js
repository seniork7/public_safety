import AdminForm from "../models/admin_schema.js"
import bcrypt from "bcryptjs"

const submitAdminForm = async (req, res) => {
    const { email, password } = req.body

    const admin = await AdminForm.findOne({ email })
    if (!admin) {
        return res.status(401).json({ message: "Incorrect username!" })
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash)
    if (!isValid) {
        return res.status(401).json({ message: "Incorrect password!" })
    }

    res.json({
        message: "Login successful",
        role: admin.role
    })
}


export default submitAdminForm