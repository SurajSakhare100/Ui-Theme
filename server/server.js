import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import componentRoutes from './routes/component.route.js';

const app = express();



const connectDB = async () => {
    try {
        const data=await mongoose.connect('mongodb+srv://sakharesuraj10:D0mz2IaHvF5pe6Kr@uistore.zfyjg.mongodb.net/?retryWrites=true&w=majority&appName=UiStore');
    } catch (error) {
        console.error("MongoDB connection FAILED", error);
        process.exit(1);
    }
}
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/components', componentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
