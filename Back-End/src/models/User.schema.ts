import { Model, model, Schema } from "mongoose";
import { IUser } from "../types/User.interface";
const UserSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        require: true,
    }, 
    birthday: {
        type: Date,
        require: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
});
export const User: Model<IUser> = model<IUser>("users", UserSchema);