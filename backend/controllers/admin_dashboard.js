import Application from '../models/volunteer_application_schema.js'

// This function gets the admin and application data for 
// the dashboard from the database and sends it to the frontend
const getDashboardData = async (req, res) => {
    try {
        const { id, role, fName, lName } = req.admin

        const applications = await Application.find()
        const totalApplications = applications.length
        const totalPending = applications.filter(app => app.status.toLocaleLowerCase() === "pending").length
        const totalApproved = applications.filter(app => app.status.toLocaleLowerCase() === "approved").length
        const totalRejected = applications.filter(app => app.status.toLocaleLowerCase() === "rejected").length

        res.json({
            "admin": {
                "id": id,
                "role":role,
                "fullName":`${fName} ${lName}`,
            },
            "stats": {
                "totalApplications": totalApplications,
                "totalPending": totalPending,
                "totalApproved": totalApproved,
                "totalRejected": totalRejected
            },
            "applications": applications
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

export default getDashboardData