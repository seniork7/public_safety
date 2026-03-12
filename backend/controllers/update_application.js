import Application from '../models/volunteer_application_schema.js'
import AdminForm from '../models/admin_schema.js'

const updateApplication = async (req, res) => {
    
    try {
        const { id } = req.params
        const { status } = req.body

        const adminRole = req.admin?.role.toLowerCase() 
        const adminID = req.admin?.id

        // Check if the admin ID from the token exists in the database
        const idInDB = await AdminForm.findById(adminID).select("_id").lean()

        if (!idInDB) {
            return res.status(404).json({ message: "Admin not found" })
        }
        
        if (adminRole !== "admin") {
            return res.status(403).json({ message: "Unauthorized! Action can only be performed by an admin." })
        }
        
        const allowedStatuses = ["pending", "approved", "rejected"]

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status value" })
        }

        const application = await Application.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        )

        if (!application) {
            return res.status(404).json({ message: "Application not found" })
        }

        res.status(200).json({
            message: `Application ${application._id} updated successfully`,
            application
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

export default updateApplication