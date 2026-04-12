import AdminForm from '../models/admin_schema.js'

const updateAdminProfile = async (req, res) => {
    try {
        const { fName, lName } = req.body

        const trimmedFirst = (fName ?? '').trim()
        const trimmedLast  = (lName ?? '').trim()

        if (!trimmedFirst && !trimmedLast) {
            return res.status(400).json({ message: 'First name and last name cannot both be empty' })
        }

        const updated = await AdminForm.findByIdAndUpdate(
            req.admin.id,
            { fName: trimmedFirst, lName: trimmedLast },
            { new: true, runValidators: true }
        )

        if (!updated) {
            return res.status(404).json({ message: 'Admin not found' })
        }

        res.json({
            message: 'Profile updated successfully',
            fName: updated.fName,
            lName: updated.lName,
        })
    } catch (error) {
        console.error('Error updating admin profile:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default updateAdminProfile
