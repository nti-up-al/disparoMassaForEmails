import { Router, Request, Response } from "express";
import { Usuario } from "../types/usuario";
import { sendEmails } from "../service/sendemails";
const rotas = Router();



// Get all books
rotas.post("/sendEmails", (req: Request, res: Response) => {
    res.json(sendEmails(req.body));
});

export default rotas ;