import mongoose from 'mongoose'

const { Schema, model } = mongoose

const contactFormSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true  },     
    status: { type: String, default: 'New'  },
    createdAt: { type: Date, default: Date.now },
});

// model() links the schema to a MongoDB collection and
// allows you to create, read, update, and delete documents
const ContactForm = model('Contact', contactFormSchema)

export default ContactForm
