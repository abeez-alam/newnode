import mongoose from "mongoose";

export const connectToDb = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("MONGODB_URI is not defined in .env");
        process.exit(1);
    }

    try {
       mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

        console.log("MongoDB has been connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }

    mongoose.connection.on("error", (error) => {
        console.error("MongoDB connection error:", error);
    });
};
 
