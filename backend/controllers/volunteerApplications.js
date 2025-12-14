import ApplicationForm from '../models/volunteerApplication.js'


const submitVolunteerApplication = async (req, res) => {
    try {
        const newApplicant = await ApplicationForm.create(req.body)
        res.status(201).json({ success: true, data: newApplicant })
    }catch(error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

export default submitVolunteerApplication