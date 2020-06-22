# projetobegrowth
Esse projeto contém a criação de um projeto web utilizando a como base um modelo Rappi de cadastro e visualização de demanda.

## Instalando
* Para rodar o projeto você precisa ter o [NodeJS](https://nodejs.org/en/) instalado.
* Você também irá precisar do [MongoDB](https://www.mongodb.com/) instalado.
* Abrir o prompt de comando e navegar até a pasta raiz do projeto "cliente_web".
* Execute o comando "npm i" para instalar todas as dependências necessárias para o projeto.
* Executar o comando ""nodemon app"", para subir o servidor localmente.
* Executar o comando ''mongod'', para subir o Mongo Database localmente.
* Abrir o navegador e acessar "localhost".

## Explicação do projeto
* Todos os projetos estão na porta default 80.
* localhost/
 * View básica de apresentação do projeto, com uma api do googlemaps para visualização simples.
* localhost/supermercados
 * Formulário para inserir o produto, sua validade e local de coleta com todos os campos obrigatórios.
* localhost/cadastro
 * Apenas um aviso de que o produto foi inserido no database com sucesso. Clique em voltar para acessar /supermercados novamente.
* localhost/entregadores
 * Tabela contendo todos os produtos que foram inseridos no database, todos filtrados a partir da data de vencimento mais próxima.
## Fim

### Obrigado pela oportunidade.