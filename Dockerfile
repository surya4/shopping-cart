FROM node:alpine
COPY package.json package.json
RUN npm install

#Add source files
COPY . . 
CMD ["npm", "start"]