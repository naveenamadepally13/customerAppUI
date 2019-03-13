var express = require('express');
var http = require('http');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster-x6phc.mongodb.net/CustomerApp?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var port = '4200';
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
