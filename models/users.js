const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');
// const moment = require('moment');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const getDetailsById = (id) => {
  userDb.user_json[id];
};

module.exports = {
  getDetailsById 
}