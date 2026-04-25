import Application from '../models/volunteer_application_schema.js'
import AdminForm from '../models/admin_schema.js'

const updateApplicationNote = async (req, res) => {
    try {
        const { id, noteId } = req.params
        const { text } = req.body
        const adminID = req.admin?.id

        if (!text || !text.trim()) {
            return res.status(400).json({ message: "Note text is required" })
        }

        const idInDB = await AdminForm.findById(adminID).select("_id").lean()
        if (!idInDB) {
            return res.status(404).json({ message: "Admin not found" })
        }

        const application = await Application.findOneAndUpdate(
            { _id: id, "notes._id": noteId },
            { $set: { "notes.$.text": text.trim() } },
            { new: true }
        )

        if (!application) {
            return res.status(404).json({ message: "Application or note not found" })
        }

        const updatedNote = application.notes.id(noteId)

        res.status(200).json({ message: "Note updated", note: updatedNote })

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

export default updateApplicationNote