import { Router } from "express";
import routerTask from "./task.routes";
import router from "./user.routes";

const routes: Router = Router();

routes.use('/user', router)
routes.use('/task', routerTask)

export default routes;