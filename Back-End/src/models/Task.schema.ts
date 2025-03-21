import { model, Model, Schema } from "mongoose";
import { ITask } from "../types/Task.interface";

const TaskSchema: Schema<ITask> = new Schema<ITask>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    creation_task: {
        type: Date,
        default: new Date()
    },
    tasks: {
        type: [String],
        required: true
    },
    users: {
        type: [Schema.Types.ObjectId],
        ref: "users",
        required: true
    },
    user_create: {
        type: Schema.Types.ObjectId,
        ref: "users",
    }
});
export const Task: Model<ITask> = model<ITask>("tasks", TaskSchema);