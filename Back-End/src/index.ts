/* eslint-disable @typescript-eslint/no-unused-vars */
import { mongoDB } from "./config/Database.conection";
import { PORT } from "./config/envs.config";
import server from "./server";

mongoDB().then((_res: unknown) => {
    server.listen(PORT, () => console.log(`Server is listening in the port ${PORT}.`));
}).catch((error) => {
    throw new Error(`Hubo un problema al levantar el servidor. Error: ${error instanceof Error ? error.message : 'Hubo un error deconocido.'}`);
});