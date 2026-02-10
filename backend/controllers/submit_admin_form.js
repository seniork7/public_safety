import AdminForm from '../models/admin_schema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const submitAdminForm = async (req, res) => {
    const { email, password } = req.body

    const admin = await AdminForm.findOne({ email })
    if (!admin) {
        return res.status(401).json({ message: 'Incorrect username!' })
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash)
    if (!isValid) {
        return res.status(401).json({ message: 'Incorrect password!' })
    }

    const payload = {
        id: admin._id,
        role: admin.role,
        fName: admin.fName,
        lName: admin.lName
    }

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )

    res.cookie('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 60 * 60 * 1000
    })

    res.json({
        message: 'Login successful',
        role: admin.role
    })
}


export default submitAdminForm