import  mongoose  from "mongoose"
import { MONGODB } from "./envs.config";

export const mongoDB = async () => {
    try {
        await mongoose.connect(MONGODB);
    } catch (error) {
        throw new Error(`Hubo un problema al conectarnos a la base de datos. Error: ${error instanceof Error ? error.message : 'Hubo un error deconocido.'}`);
    }
} 