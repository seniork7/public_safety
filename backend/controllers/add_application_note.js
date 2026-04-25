import Application from '../models/volunteer_application_schema.js'
import AdminForm from '../models/admin_schema.js'

const addApplicationNote = async (req, res) => {
    try {
        const { id } = req.params
        const { text } = req.body
        const adminID = req.admin?.id

        if (!text || !text.trim()) {
            return res.status(400).json({ message: "Note text is required" })
        }

        const idInDB = await AdminForm.findById(adminID).select("_id fName lName").lean()
        if (!idInDB) {
            return res.status(404).json({ message: "Admin not found" })
        }

        const adminName = `${idInDB.fName} ${idInDB.lName}`.trim()

        const application = await Application.findByIdAndUpdate(
            id,
            { $push: { notes: { text: text.trim(), adminName } } },
            { new: true, runValidators: true }
        )

        if (!application) {
            return res.status(404).json({ message: "Application not found" })
        }

        const newNote = application.notes[application.notes.length - 1]

        res.status(201).json({ message: "Note added", note: newNote })

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

export default addApplicationNote
