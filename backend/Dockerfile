FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g nodemon
RUN npm install
EXPOSE 3333
CMD ["npm", "start"]
