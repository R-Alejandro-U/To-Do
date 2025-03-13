import { PORT } from "./config/envs.config";
import server from "./server";

server.listen(PORT, () => console.log(`Server is listening in the port ${PORT}.`));