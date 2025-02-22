import express from 'express';
import rotas from './apis/rotas';

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api", rotas);
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
