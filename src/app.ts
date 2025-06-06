import express from "express";
import rotas from "./apis/rotas";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", rotas);
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
