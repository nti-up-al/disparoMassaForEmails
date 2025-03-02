import { Usuario } from "../types/usuario";
const nodemailer = require("nodemailer");



const port_smtp = 587;
const host_smtp = "smtp.gmail.com"; //roda no hotmail tambpem, só precisa mudar algumas variaveis
var from_user = "rafael2mcont@gmail.com";
var to_user= "";
const password = "senha de app"//"Senha do app do gmail ou senha do e-mail se hotmail";


export const sendEmails  =  (usuarios : Usuario[])=>{
    usuarios.forEach((req, res)=>{
        to_user = to_user+req.email+", ";
    });
    console.log(to_user);
    //ISSO PODE SER REMOVIDO NO FUTURO SEM MEDO DE SER FELIZ!!!! 
    transport.sendMail({
        from: "UP <"+from_user+">",
        to: to_user,
        subject: "COBRNÇ UNID POPUL.",
        html:"<h1>TESTE<h1><p>Teste com SMTP E Nodemailer.<p>",
        text:  "ISSO È UJM TESTE DEV!!"
    }).then((response) => console.log("E-mail enviado com sucesso."))
.catch((err) => console.log("Erro: "+err));
return 'ok';
}


const transport = nodemailer.createTransport({
    host: host_smtp,
    port: port_smtp,
    secure: false, //true para 465 e false para outras
    auth:{
        user:from_user,
        pass:password
    }
});

//FaZER UM FOR PaRa LER a LISTa DE USUaRIO 




