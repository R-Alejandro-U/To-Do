import "dotenv/config";
const data: NodeJS.ProcessEnv = process.env;
export const PORT: number = data["PORT"] ?  Number(data["PORT"]) : 3000;
export const MONGODB: string = data['MONGODB'] ? data['MONGODB'] : "";