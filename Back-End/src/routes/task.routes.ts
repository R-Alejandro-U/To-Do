import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/', (_req: Request, res: Response) => console.log(res.json('Hola Mundo!!!')));

export default router;