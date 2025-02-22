import { Router, Request, Response } from "express";
import { Usuario } from "../types/usuario";

const rotas = Router();

const usuario : Usuario= {
    nome: "",
    email: "",
    matricula: "",
    telefone: "",
    numtitulo: "",
    cpf: ""
}

// Get all books
rotas.get("/sendEmails", (req: Request, res: Response) => {
    res.json(usuario);
});

export default rotas ;