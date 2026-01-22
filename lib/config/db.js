import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('my-pink-blog');
    console.log("DB connected")
};
