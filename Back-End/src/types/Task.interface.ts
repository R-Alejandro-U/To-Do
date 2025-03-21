import { Document } from "mongoose";
import { IUser } from "./User.interface";

export interface ITask extends Document {
    title: string;
    creation_task?: Date;
    user_create: IUser["_id"];
    users: IUser["_id"][];
    tasks: string[];
}