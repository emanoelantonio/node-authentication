import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ work: 'Servidor ativado com sucesso!!' });

});

app.listen(3000, () => {
  console.log('running at port 3000!');
})