// const userDb = require('../db/users');
const orderDb = require('../db/orders');
// const productDb = require('../db/products');
// let moment = require('moment');

const getDetailsById = (id) => {
  orderDb.orders_json[id];
};

module.exports = {
  getDetailsById 
}