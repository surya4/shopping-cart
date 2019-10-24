// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
const productDb = require('../db/products');
// const moment = require('moment');

const getDetailsById = (id) => {
  productDb.products_json[id];
};

module.exports = {
  getDetailsById 
}