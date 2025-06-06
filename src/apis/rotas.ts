import { Request, Response, Router } from "express";
import { sendEmails } from "../service/sendemails";

const rotas = Router();

rotas.post("/sendEmails", (req: Request, res: Response) => {
  res.json(sendEmails(req.body));
});

export default rotas;
