Resouces - um objeto uma entidade, 

## Boas Práticas 
- Utilizar verbos Http para nossas requisições.
GET- RECEBER DADOS DE UM RESOURCE
POST- ENVIAR DADOS PARA SEREM PROCESSADOS POR UM RESOUCE
PUT- ATUALIZA OS DADOS DE UM RESOUCE
DELETE- DELETE UM RESOURCE

- Não utilizar barras no final do seu edpoint
ERRADO: ex: app.get("/clients/")
CORRETO: ex: app.get("/clients")


Então se o meu servidor por 
http://localhost:3000/client --> esse caminho completo se chama URI ou URL/ um endpoint client/ client é o nome do meu resource
Get- recebe os dados desse client
Post - envia dados ou infos para esse cliente
Put - atualiza os dados do cliente
Delete - delete um cliente




