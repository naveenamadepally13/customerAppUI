var express = require('express');
var http = require('http');
var apiRouter = require('./routes/customer');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster-x6phc.mongodb.net/CustomerApp?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/CustomerAPP')));
app.use('/customers', express.static(path.join(__dirname, 'dist/CustomerAPP')));
app.use('/customer-read/:id', express.static(path.join(__dirname, 'dist/CustomerAPP')));
app.use('/customer-create', express.static(path.join(__dirname, 'dist/CustomerAPP')));
app.use('/customer-edit/:id', express.static(path.join(__dirname, 'dist/CustomerAPP')));
app.use('/api', apiRouter);


var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')});

module.exports = app;
