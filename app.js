const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

// const SESS_LIFETIME = 1000 * 60 * 60;
const SESS_LIFETIME = 1000 * 60 * 5;


const app = express();

app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    // store,
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET || 'sssssssssssssshkoihai',
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: process.env.NODE_ENV === 'production'
    }
  })
);

// routes
const indexRoutes = require('./routes/index')
app.use('/shop/v1/index', indexRoutes);
const userRoutes = require('./routes/users')
app.use('/shop/v1/user', userRoutes);
const productRoutes = require('./routes/products')
app.use('/shop/v1/product', productRoutes);
const orderRoutes = require('./routes/orders')
app.use('/shop/v1/order', orderRoutes);

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
