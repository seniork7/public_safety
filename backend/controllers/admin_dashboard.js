import Application from '../models/volunteer_application_schema.js'

const getDashboardData = async (req, res) => {
    try {
        const { id, role, fName, lName } = req.admin

        const applications = await Application.find()

        res.json({
            adminID: id,
            role,
            totalApplications: applications.length,
            applications,
            fName,
            lName
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

export default getDashboardData