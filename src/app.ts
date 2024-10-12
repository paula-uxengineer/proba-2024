import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/database';

import userRoutes from './routes/userRoutes';
import activityRoutes from './routes/activityRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/appActivitats', userRoutes);

app.use('/appActivitats', activityRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
