import mongoose from 'mongoose'

const { Schema, model } = mongoose

const applicationFormSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },     
  availability: { type: String, required: true  },
  whyVolunteer: { type: String, required: true  },     
  checkbox: { type: Boolean, required: true  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },
  notes: [{
    text: { type: String, required: true },
    adminName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
  createdAt: { type: Date, default: Date.now },
});

const ApplicationForm = model('Volunteer', applicationFormSchema)

export default ApplicationForm
