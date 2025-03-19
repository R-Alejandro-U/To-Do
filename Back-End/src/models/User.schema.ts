import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    birthday: {
        type: Date,
        require: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})