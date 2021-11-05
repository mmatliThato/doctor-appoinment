FROM node:14.15.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm i -g @angular/cli@11.2.1
RUN npm install -g json-server

RUN npm i
RUN ng build

EXPOSE $PORT

CMD [ "npm", "run" , "start:prod" ]