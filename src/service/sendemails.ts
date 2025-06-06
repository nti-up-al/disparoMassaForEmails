import { Usuario } from "../types/usuario";
import nodemailer from "nodemailer";

export const sendEmails = (usuarios: Usuario[]) => {
  usuarios.forEach((usuario) => {
    transport
      .sendMail({
        from: "UP <" + from_user + ">",
        to: usuario.email,
        subject: "COBRNÇ UNID POPUL.",
        html: "<h1>TESTE<h1><p>Teste com SMTP E Nodemailer.<p>",
        text: "ISSO È UJM TESTE DEV!!",
      })
      .then((_response) => console.log("E-mail enviado com sucesso."))
      .catch((err) => console.log("Erro: " + err));
  });
  console.log(usuarios);
  //ISSO PODE SER REMOVIDO NO FUTURO SEM MEDO DE SER FELIZ!!!!

  return "ok";
};

const port_smtp = 587;
const host_smtp = "smtp.gmail.com"; //roda no hotmail tambpem, só precisa mudar algumas variaveis
const from_user = "rafael2mcont@gmail.com";
const password = "SENHSSSS"; //"Senha do app do gmail ou senha do e-mail se hotmail";

const transport = nodemailer.createTransport({
  host: host_smtp,
  port: port_smtp,
  secure: false, //true para 465 e false para outras
  auth: {
    user: from_user,
    pass: password,
  },
});
