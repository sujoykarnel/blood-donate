import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err));
};

export default connectDB;
