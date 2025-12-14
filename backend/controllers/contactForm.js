import ContactForm from "../models/contactForm.js"


const submitContactForm = async (req, res) => {
    try {
        const newMessage = await ContactForm.create(req.body)
        res.status(201).json({ success: true, data: newMessage })
    }catch(error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

export default submitContactForm