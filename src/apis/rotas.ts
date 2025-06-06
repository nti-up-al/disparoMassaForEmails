import { Request, Response, Router } from "express";
import { ContribuicaoMensal } from "../mailer/ContribuicaoMensal";
import { Contribuinte } from "../types/contribuinte";

const rotas = Router();

rotas.post("/sendEmails", (req: Request, res: Response) => {
  // Zod Validations

  for (const contribuinte of req.body as Contribuinte[]) {
    new ContribuicaoMensal(contribuinte).send();
  }

  res.json({});
});

export default rotas;
