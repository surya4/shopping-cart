FROM node:carbon AS base

WORKDIR /app

FROM base AS dependencies
COPY package*.json ./
RUN npm install

FROM dependencies AS build  
WORKDIR /app
COPY . /app

FROM node:12-alpine AS assets
WORKDIR /app
COPY --from=dependencies /app/package.json ./

RUN apk --no-cache add --virtual build-deps  alpine-sdk \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del build-deps

COPY --from=build /app ./

CMD ["npm", "start"]

EXPOSE 3000