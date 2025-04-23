FROM node:23.11

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/81b1373f17855a4dc21156cfe1694c31d7d1792e/wait-for-it.sh /usr/bin/wait-for-it
RUN chmod +x /usr/bin/wait-for-it

WORKDIR /node/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "wait-for-it", "database:5432", "--", "npm", "start" ]