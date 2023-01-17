import mongoose from 'mongoose';
import 'dotenv/config.js';

const port = process.env.PORT || 5000;

export const connectDB = async () => {
  try {
    const connectionMongo = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected: ${connectionMongo.connection.host}`);
  }
  catch (err) {
    console.log(err)
    process.exit(1)
  }
}
