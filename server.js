'use strict';

const http = require('http');
const dotenv = require('dotenv');
const port = process.env.SRV_PORT || '3000';

const app = require('./app');

dotenv.config();
app.set('port', port);

const server = http.createServer(app)

server.listen(port);

server.on('error', (error) => {
  console.error('error found', error)
});

server.on('listening', () => {
  console.log('Server running at ', port)
});