import express from "express";
import errorHendler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações das rotas
app.use(usersRoute);
app.use(statusRoute);

//Configuração dos Handlers de erro
app.use(errorHendler);


//Inicialização do servidor
app.listen(3000, () => {
  console.log('Server running at port 3000!');
})