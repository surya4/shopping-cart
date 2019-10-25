const db = require('../models/db');
// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');
// const moment = require('moment');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const getDetailsById = async (id) => {
  const dbQuery = db.read.select('*').from('users');
  return dbQuery;
};

module.exports = {
  getDetailsById 
}