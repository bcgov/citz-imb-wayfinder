import { Request, Response, Router } from 'express';

const healthRouter = Router();

healthRouter.route("/health")
.get((req: Request, res: Response) => {
  res.status(200).send("Express API + Typescript Online")
})

export default healthRouter;
