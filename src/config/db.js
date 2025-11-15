import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/myApiDB");
        console.log("MongoDB connected!");
    }catch (err) {
        console.log("Failed to connect to MongoDB!", err);
        process.exit(1);
    }
}