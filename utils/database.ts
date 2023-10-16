import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    const connectionOptions: ConnectOptions = {
        dbName: 'newsApp'
    };

    try {
        await mongoose.connect(process.env.MONGODB_URI!, connectionOptions);
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error: any) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};
