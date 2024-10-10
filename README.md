Para rodar com docker:
 - docker compose up
 - docker exec -it postgres_db psql -U postgres -d bancobriefing -c "CREATE TABLE briefing (id SERIAL PRIMARY KEY, nomeCliente VARCHAR(100) NOT NULL, descricao TEXT NOT NULL, data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, estado VARCHAR(50) DEFAULT 'negociação' NOT NULL CHECK (estado IN ('negociação', 'finalizado', 'aprovado')));"
 - acessa a porta localhost:3333 no seu navegador

tenha instalado o nodeJS e Mysql
obs:
Criação do banco de dados:

O tipo do banco deve ser mySQL:

Crie um modelo com: User: root Userhost: localhost

Crie o bando de dados 'bancobriefing' possui uma tabela 'briefing' com colunas:

id INT PRIMARY KEY AUTO_INCREMENT NOT NULL

nomeCliente VARCHAR(100) NOT NULL

descricao TEXT NOT NULL

data_hora TIMESTAMP DEFAULT CURRENT_TIME NOT NULL

estado ENUM("negociação","finalizado","aprovado") DEFAULT 'negociação' NOT NULL

Com o banco preparado, no arquivo bd.js deve ser feita uma alteração simples:

Alterar 'password: dev4sky' para a sua senha utilizada no 'mySQL'

Feito isso, o banco de dados foi atualizado e definido.

------------/Backend/------------

Execução de inicialização:

npm install -g nodemon
rm -rf node_modules
npm install
sudo chmod +x $(which nodemon)
npm start

Módulos:

Express; Nodemon; Cors; Mysql;

------------/Frontend/------------

Execução de inicialização:

npm install
npm run dev

Módulos:

Vite; Axios; Styled-components; React-Toastify;

porta:

localhost:3333
