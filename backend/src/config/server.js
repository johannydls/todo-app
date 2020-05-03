const PORT = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const server = express();

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, () => {
  console.log(`Backend is running on  http://localhost:${PORT}`);
});

module.exports = server;