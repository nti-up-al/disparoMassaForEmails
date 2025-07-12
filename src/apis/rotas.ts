import { Request, Response, Router } from "express";
import { ContribuicaoMensal } from "../mailer/ContribuicaoMensal";
import { Contribuinte } from "../types/contribuinte";

const rotas = Router();

rotas.post("/contribuicao-mensal", async (req: Request, res: Response) => {
  for (const contribuinte of req.body as Contribuinte[]) {
    await new ContribuicaoMensal(contribuinte).send();
  }

  res.json({});
});

export default rotas;
