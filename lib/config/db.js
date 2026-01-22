import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://user:user@cluster0.0nh14uf.mongodb.net/my-pink-blog');
    console.log("DB connected")
};