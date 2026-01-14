import mongoose from 'mongoose'

const { Schema, model } = mongoose

const adminFormSchema = new Schema({
    fName: { type: String },
    lName: { type: String },
    // unique: true ensures each email in the DB is different
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true  },  
    // enum restricts the field to only allow the values in the array
    role: { type: String, enum: ["Admin", "Demo_Admin"], default: "Demo_Admin" },
    createdAt: { type: Date, default: Date.now },
});

// model() links the schema to a MongoDB collection and
// allows you to create, read, update, and delete documents
const AdminForm = model('Admin', adminFormSchema)

export default AdminForm
