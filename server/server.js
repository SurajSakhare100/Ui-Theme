import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import downloadRoutes from './download.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/download', downloadRoutes);


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
