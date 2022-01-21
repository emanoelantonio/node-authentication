# Microserviço de autenticação com Nodejs

Este é projeto de **microserviço de autenticação** que poderá compor a sua caixinha de ferramentas e ser muito útil no seu dia a dia. :hammer::wrench:

## Composição do projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate

### Dependências

* @types/express
* @types/node
* @ts-node-dev
* typescript
* express
* http-status-codes

## Links úteis

[Design de API RESTFUL](https://docs.microsoft.com/pt-br/azure/architecture/best-practices/api-design) </br>
[NodeJS](https://nodejs.org/pt-br/)</br>
[Express](https://expressjs.com/pt-br/)</br>
[Insomnia](https://insomnia.rest/download) (Usado para testar as requisições.)