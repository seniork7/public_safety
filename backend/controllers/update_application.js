import Application from '../models/volunteer_application_schema.js'

const updateApplication = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body

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