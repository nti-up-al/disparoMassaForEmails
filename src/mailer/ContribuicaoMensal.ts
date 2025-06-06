import { Contribuinte } from "../types/contribuinte";
import { BaseMailer } from "./BaseMailer";

export class ContribuicaoMensal extends BaseMailer {
  constructor(contribuinte: Contribuinte) {
    super(
      contribuinte.email,
      "Lembrete de Contribuição Mensal",
      "contribuicao_mensal",
      {
        nome: contribuinte.nome,
        email: contribuinte.email,
        telefone: contribuinte.telefone,
      }
    );
  }
}
