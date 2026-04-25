import Application from '../models/volunteer_application_schema.js'
import AdminForm from '../models/admin_schema.js'

const deleteApplicationNote = async (req, res) => {
    try {
        const { id, noteId } = req.params
        const adminID = req.admin?.id

        const idInDB = await AdminForm.findById(adminID).select("_id").lean()
        if (!idInDB) {
            return res.status(404).json({ message: "Admin not found" })
        }

        const application = await Application.findByIdAndUpdate(
            id,
            { $pull: { notes: { _id: noteId } } },
            { new: true }
        )

        if (!application) {
            return res.status(404).json({ message: "Application not found" })
        }

        res.status(200).json({ message: "Note deleted" })

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

export default deleteApplicationNote
