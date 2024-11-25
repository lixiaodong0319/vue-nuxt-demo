import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/admin');
    } catch (error) {
        process.exit(1);
    }
};

export default connectDB;