FROM node:15
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install -g npm
RUN npm install --only=prod