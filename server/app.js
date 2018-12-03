const express = require('express');
const http = require('http');

const routers = require('../server/middleware/routers');

let app = express();
app.use(express.static('../client'));





http.createServer(app).listen(3000, '127.0.0.1', (req, res) => {
  console.log('Lissten');
  console.log(req);
});