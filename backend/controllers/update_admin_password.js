import AdminForm from '../models/admin_schema.js'
import bcrypt from 'bcryptjs'

const updateAdminPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters' })
        }

        const admin = await AdminForm.findById(req.admin.id)
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' })
        }

        const isValid = await bcrypt.compare(currentPassword, admin.passwordHash)
        if (!isValid) {
            return res.status(401).json({ message: 'Current password is incorrect' })
        }

        const hash = await bcrypt.hash(newPassword, 12)
        await AdminForm.findByIdAndUpdate(req.admin.id, { passwordHash: hash })

        res.json({ message: 'Password updated successfully' })
    } catch (error) {
        console.error('Error updating admin password:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default updateAdminPassword
