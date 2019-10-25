// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');

const db = require('../models/db');
const moment = require('moment');

exports.getDetailsById = async (data) => {
  const query = db.read.select('*')
  .from('orders')
  .where('id', '=', id);
  return query;
};

exports.createOrder = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('orders').insert({
    product_id: data.product_id,
    user_id: data.user_id,
    quantity: data.quantity,
    sub_total: data.sub_total,
    stage: data.stage,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};