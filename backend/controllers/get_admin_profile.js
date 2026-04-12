import AdminForm from '../models/admin_schema.js'

const getAdminProfile = async (req, res) => {
    try {
        const admin = await AdminForm.findById(req.admin.id)
            .select('fName lName email role createdAt')
            .lean()

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' })
        }

        res.json({
            fName: admin.fName,
            lName: admin.lName,
            email: admin.email,
            role: admin.role,
            createdAt: admin.createdAt,
        })
    } catch (error) {
        console.error('Error fetching admin profile:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default getAdminProfile
