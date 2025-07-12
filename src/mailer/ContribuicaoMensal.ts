import { Contribuinte } from "../types/contribuinte";
import { BaseMailer } from "./BaseMailer";

export class ContribuicaoMensal extends BaseMailer {
  constructor(contribuinte: Contribuinte) {
    super(
      contribuinte.email,
      "Lembrete de Contribuição Mensal - UP Alagoas",
      "contribuicao_mensal",
      {
        nomeContribuinte: contribuinte.nome,
        emailContribuinte: contribuinte.email,
        telefoneContribuinte: contribuinte.telefone,
      }
    );
  }
}
