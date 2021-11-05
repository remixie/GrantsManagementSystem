FROM node:lts

WORKDIR /usr/src

COPY . ./

COPY gms/package.json ./

RUN npm install

RUN npm install @vue/cli@4.5.13  -g