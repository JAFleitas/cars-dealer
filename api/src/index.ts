import { app } from "./app";
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
  
  app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
  });
}

start();

