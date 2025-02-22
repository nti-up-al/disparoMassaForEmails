import { Usuario } from "../types/usuario";
const nodemailer = require("nodemailer");

export const sendEmails  =  (teste : Usuario)=>{
    //ISSO DEVE SER REMOVIDO NO FUTURO SEM MEDO DE SER FELIZ!!!!
    transport.sendMail({
        from: "UP <"+from_user+">",
        to: to_user,
        subject: "Testando envio com SMTP e Nodemailer.",
        html:"<h1>TESTE<h1><p>Teste com SMTP E Nodemailer.<p>",
        text:  "ISSO È UJM TESTE DEV!!"
    }).then((response) => console.log("E-mail enviado com sucesso."))
.catch((err) => console.log("Erro: "+err));
return 'ok';
}


const port_smtp = 587;
const host_smtp = "smtp.gmail.com"; //roda no hotmail tambpem, só precisa mudar algumas variaveis
const from_user = "rafael2mcont@gmail.com";
const to_user= "diego.almeida14@gmail.com";
const password = "SENHSSSS"//"Senha do app do gmail ou senha do e-mail se hotmail";


const transport = nodemailer.createTransport({
    host: host_smtp,
    port: port_smtp,
    secure: false, //true para 465 e false para outras
    auth:{
        user:from_user,
        pass:password
    }
});




