O Backend e o Frontend estão separados por pastas.

------------/Backend/------------

   O tipo do banco deve ser mySQL, onde o bando de dados 'bancobriefing' possui uma tabela 'briefing' com colunas:

   id PRIMARY KEY AUTO_INCREMENT NOT NULL
   
   nomeCliente VARCHAR(100) NOT NULL
 
   descricao TEXT NOT NULL

   data_hora TIMESTAMP CURRENT_TIME NOT NULL

   estado ENUM("negociação","finalizado","aprovado") DEFAULT 'negociação' NOT NULL
   
   Com o banco preparado, no arquivo bd.js deve ser feita alterações simples:
   1- Alterar 'user: root' para o usuário do banco;
   2- Alterar 'password: dev4sky'
   3- Mesmo sendo inesperado, caso ainda haja alguma discrepância entre os outros dados, devem ser atualizados também

   Feito isso, o banco de dados foi atualizado e definido.

   Caso seja necessário, no index.js poderá ser alterado a porta padrão 3333 para a de sua preferência:
   
   app.listen(3333) <--

   Após as etapas necessárias, abra o terminal na pasta /backend/ e execute:

   npm start
   
   Deve se ter conhecimento dos módulos utilizados no backend:

   Express;
   Nodemon;
   Cors;
   Mysql;

   Arquivos Principais:

   controllers/brf.js - controla a interação com o banco
   
   routes/briefins.js - controla as rotas e faz requisições ao user.js

   index.js - arquivo principal do server

   bd.js - como ter acesso ao banco de dados:

   

------------/Frontend/------------

   Os módulos utilizados:

   Vite;
   Axios;
   Styled-components;
   React-Toastify;

   Arquivos Principais:

   App.jsx - arquivo que mostra a toda a interface gráfica

   Além do App.jsx, temos duas pastas de extrema importância:

   Components:
   
   Button.jsx - Configura um botão que é utilizado em partes de outros códigos
   
   Grid.jsx - Responsável por mostrar uma grade que busca e exibe dados dos briefins existente no banco de dados,
   também possui a capacidade de editar e excluir briefins

   Input - Responsável pela inserção de novos briefins no Banco de Dados

   Styles:

   Todos os arquivos em Style são personalizações de design

   ButtonStyle.jsx - Estilização para o Botão

   GlobalStyle.jsx - Estilização Global

   GridStyle.jsx - Estilização para o Grid

   InputStyle.jsx - Estilização para o Input

   Mudanças obrigatórias:

   Caso houve alguma alteração na porta de escuta do backend, deve ser feita a mesma alteração para o Input.jsx e Grid.jsx
   deve se mudar o '3333' para a porta utilizada:
    
   axios.get('http://localhost:3333') <--

   axios.post('http://localhost:3333') <--

   entre outros...

   caso não houve mudança de porta, isso não é necessário

   Feito o necessário, deve se ir em um novo terminal e executar:

   cd frontend/briefing-front
   npm run dev

   Com os 2 terminais ativos, acesse a porta e o Gestor de Briefins estará funcionando!

   Insira os e Salve, reinicie a página e os novos briefins vão aparecer;

   Edite o nome ou a descrição a qualquer momento e de qualquer briefing;

   Delete quaisquer briefing que deseja;


UTILIZAÇÃO DE IA NO DESENVOLVIMENTO:

   Foi utilizado o chatGPT na utilização das bibliotecas, para saber funcionalidades e estrutura, como por exemplo o Styled-Components, onde eu utilizei muito ele para me ajudar a estilizar os components,
   Também foi utilizado para otimizar a estrutura do código, onde eu utilizei o Gpt passando meu próprio código ou a lógica utilizada no código para que ele desse sugestões do que poderia melhorar
   Fora algumas lógicas que ele mesmo sugeriu, que naquele contexto seria uma lógica melhor que a minha!

   Minhas impressões de desenvolver com ele foi extremamente positivas, ele ajudou muito em como eu deveria usar os módulos que eu não tinha intimidade e acelerou diversos processos que eu levaria muito tempo,
   com certeza ele foi um excelente otimizador de tempo e exímio "manual de instruções" quando eu tinha alguma duvida sobre o código/biblioteca
