const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json()); // express converter json


app.use(routes);

/*
Query Params:  Patametro para filtro users?name=joao || capturar valor com request.query;
Route Params: parametro de roda users/1 || capturar valor com request.params
Request Body: Corpo da requisição criar / alterar recursos  || request.body
*/



app.listen(3333);

