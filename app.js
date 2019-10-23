const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/* DB Connection starts */

/* DB Connection Ends */


const app = express();

app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// routes
const indexRoutes = require('./routes/index')
app.use('/shop/v1/index', indexRoutes);

const userRoutes = require('./routes/user')
app.use('/shop/v1/user', userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({
    success : false,
    message : 'notFound',
    type : 'Shop Srv',
    action: req.method+' '+req.originalUrl,
    data : [],
    meta:{}
  });
});

// error handler
app.use(function (err, req, res, next) {
  if(err && err.status==520){
    return next();
  }
  console.error({
    type : 'uncaughtException',
    err:err
  }, 'shop uncaughtException');
  res.status(520).send({
    success : false,
    message : 'somethingWentWrong',
    type : 'Shop Srv',
    action: 'uncaughtException'
  });
});


module.exports = app;
