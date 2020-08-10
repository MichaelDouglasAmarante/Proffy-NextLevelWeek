//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação
//DELETE: Deletar uma informação

// Corpo (Request Body): Dados para criação ou atualização de um registro
//Routes Params: Identificar qual recurso eu quero atualizar ou deletar 
//Query Params: Paginação, filtros, ordenação

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


//http://localhost:3333
app.listen(3333);