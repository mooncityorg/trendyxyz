import mongoose from 'mongoose';
import { MONGO_URL } from '@/config/server';

export const connectMongo = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGO_URL);
    }
};
