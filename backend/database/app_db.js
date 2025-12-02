import mongoose from 'mongoose'

import 'dotenv/config'

async function connectDB() {
  const uri = process.env.MONGO_URI

  if (!uri) throw new Error('MONGO_URI not defined')

  await mongoose.connect(uri)
  console.log('MongoDB connected')
}

export default connectDB
