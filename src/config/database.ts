import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI as string);
    await mongoose.connect(
      'mongodb://admin:password@localhost:27017/backendDB?authSource=admin'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};
