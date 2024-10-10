# Usando uma imagem Node.js
FROM node:18-alpine

# Setando diretório de trabalho
WORKDIR /usr/src/app

# Copiando os arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalando as dependências do backend
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Instalando o nodemon globalmente
RUN npm install -g nodemon

# Expondo a porta da API
EXPOSE 3333

# Iniciando a aplicação
CMD ["npm", "start"]
