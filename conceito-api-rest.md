Estudos baseados

O que é uma API? (Interface de Programação de Aplicação == API)
API é uma interface que permite a comunicação entre duas aplicações diferentes (ou sistemas).

Ela funciona como um “meio de campo” entre as tecnologias, facilitando a troca de informações.
Quando falamos “tecnologias diferentes” em API, normalmente é tipo:
Frontend (TypeScript/React/Angular) conversando com
Backend (Java, C#, Node, etc.)
Ou seja, sistemas diferentes na web trocando dados (geralmente via HTTP/JSON).
Exemplo:

Imagine um restaurante:
Você (cliente) faz um pedido para o garçom (API).
O garçom leva esse pedido até a cozinha (servidor), verifica se tudo está disponível e depois volta com a resposta.
Nesse processo:
Você faz uma request (requisição) para a API (garçom)
A API leva até o servidor (cozinha)
E retorna uma response (resposta) com o resultado
Basicamente, uma API é um conjunto de regras e rotinas definidas por uma aplicação, para que outras aplicações possam usar suas funcionalidades de forma padronizada.

O que é REST? (Representational State Transfer – Transferência de Estado Representacional)

REST define um conjunto de regras para a transferência de dados, que chamamos de resources (recursos).

A comunicação geralmente acontece através do protocolo HTTP.

Seguindo o exemplo do restaurante:
Eu chego e quero um restaurante limpo e silencioso.
Da mesma forma, eu não posso “chegar de qualquer jeito” na comunicação entre sistemas, pois o REST define algumas regras para essa troca de dados feita pela API via HTTP.

Existem 6 constraints (restrições) para uma API ser RESTful, ou seja, seguir os padrões REST:

Client-Server – cliente e servidor são separados. O cliente não acessa diretamente os dados, ele faz requisições e recebe respostas.

Stateless (sem estado) – cada requisição é independente.
O servidor não guarda informações da requisição anterior.
Então cada pedido precisa ir completo para o servidor, para ele entender e responder corretamente à requisição (request).

Cacheable - Respotas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.
“Ser cacheada” significa ser guardada temporariamente pelo cliente (ou navegador) para não precisar pedir de novo ao servidor.
Ou seja:
O cliente faz uma requisição (request)
O servidor responde (response)
Essa resposta pode ser salva (cache) por um tempo

Layered System (sistema em camadas)
O cliente sempre acessa um endpoint (URI) sem precisar saber como o servidor está organizado internamente ou quais etapas ele usa para processar a requisição.
Ou seja, o cliente só faz a requisição e recebe a resposta, sem enxergar a complexidade por trás (como autenticação, regras de negócio, banco de dados, etc.).
Exemplo do restaurante:
Eu só peço o prato e recebo ele pronto.
Eu não preciso saber quem preparou, como foi feito ou quantas etapas foram necessárias até chegar na mesa.

Code on Demand (opcional)
Essa constraint permite que o servidor envie código executável para o cliente, para ele rodar localmente.
Ou seja:
O servidor não envia só dados
Ele pode enviar também um comportamento (código)
E o cliente executa isso
Exemplo:
Quando você abre um site:
O servidor envia HTML + CSS + JavaScript
O navegador (cliente) executa o JavaScript
Isso pode fazer animações, validações, interações etc.
É opcional porque nem toda API precisa fazer isso.

Uniform Interface (Interface Uniforme)
Ela define que todas as comunicações entre cliente e servidor devem seguir um padrão simples e consistente, independentemente do sistema.
Ou seja:
Sempre usar os mesmos tipos de regras para acessar recursos
Não mudar o jeito de acessar dependendo do dado
Exemplo simples (API REST):
GET /usuarios → buscar usuários
POST /usuarios → criar usuário
GET /usuarios/1 → buscar usuário específico
DELETE /usuarios/1 → deletar usuário
 Sempre o mesmo padrão:
verbo HTTP + recurso
Exemplo do restaurante:Não importa o prato que você quer:você sempre faz um pedido
sempre pelo garçom
sempre do mesmo jeito
O processo é padronizado, o que muda é só o que você pede.


