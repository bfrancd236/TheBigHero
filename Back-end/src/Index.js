const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Rota / Recurso
*/

/*
* Métodos HTTP:
* GET: Buscar/listar informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*  Tipos de parâmetros:
*   Query Params: Parâmetros nomeados enviados na rota após "?" (Filtos, paginção) 
*   Route params: Parâmetros utilizados para identificar recursos
*   Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQlite, PostgreSQL, ORACLE,  etc
* NoSQL: MongoDB, CouchDB, etc.
**/

/**
 * Driver: SELECT * FROM user
 * Query Builder: table('user').select('*').were
 */

app.listen(3333);