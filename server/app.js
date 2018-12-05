const express = require('express');
const http = require('http');
const mysql = require('mysql');

const routers = require('../server/middleware/routers');

let con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'mysql',
  password: 'mysql',
  database: 'mydb'
});



let app = express();
app.use(express.static('../client'));

app.get('/users', function (req, res, next) {
  //res.send('get users');
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected');
  });
  
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  con.end((err) => {
    if (err) throw err;
    console.log('end connettion');
  });
});

app.post('/users', function (req, res, next) {
  res.send('post users');
});




http.createServer(app).listen(3000, '127.0.0.1', (req, res) => {
  console.log('Lissten');
  console.log(req);
});