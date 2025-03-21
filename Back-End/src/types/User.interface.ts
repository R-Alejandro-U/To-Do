import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    birthday?: Date;
    email: string;
    password: string;
};