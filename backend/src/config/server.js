const PORT = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server = express();

const { logger } = require('../utils/utils');
// Middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, () => {
  //logger({ message: `Backend is running on  http://localhost:${PORT}`, timestamp: new Date(Date.now())});
  console.log(`Backend is running on  http://localhost:${PORT}`);
});

module.exports = server;