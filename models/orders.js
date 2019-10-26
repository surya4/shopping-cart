// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');

const db = require('../models/db');
const moment = require('moment');

exports.fetchOrderById = async (id) => {
  const query = db.read.select('*')
  .from('orders')
  .where('id', '=', id);
  return query;
};

exports.fetchNewOrder = async (user_id) => {
  const query = db.read.select('id', 'quantity', 'sub_total')
  .from('orders')
  .where('user_id', '=', user_id)
  .where('new', '=', 1);
  console.info("query -->", query.toQuery())
  return query;
};

exports.fetchExistingProductFromCart = async (data) => {
  const query = db.read.select('id', 'quantity', 'sub_total')
  .from('carts')
  .where('product_id', '=', data.product_id)
  .where('order_id', '=', data.order_id)
  .limit(1);
  console.info("query -->", query.toQuery())
  return query;
};

exports.createOrder = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('orders').insert({
    user_id: data.user_id,
    quantity: data.quantity || 0,
    sub_total: data.sub_total || 0,
    new: 1,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.info("query -->", query.toQuery())
  return query;
};

exports.updateOrder = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('orders').update({
    quantity: data.quantity || 0,
    sub_total: data.sub_total || 0,
    updated_at: createdAt
  })
  .where('id', '=', data.id)
  .where('new', '=', 1);
  console.info("query -->", query.toQuery())
  return query;
};

exports.closeOrder = async (id) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('orders').update({
    new: 0,
    updated_at: createdAt
  })
  .where('id', '=', id);
  console.info("query -->", query.toQuery())
  return query;
};

exports.addToCart = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('carts').insert({
    product_id: data.product_id,
    user_id: data.user_id,
    quantity: data.quantity,
    sub_total: data.sub_total,
    stage: data.stage,
    order_id: data.order_id,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.info("query -->", query.toQuery())
  return query;
};

exports.updateCart = async (data) => {
  data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

  const toBeUpdated = {};
  const canBeUpdated = ['quantity', 'sub_total', 'stage', 'updated_at'];
  for (let i in data) {
    if (canBeUpdated.indexOf(i) > -1) {
      toBeUpdated[i] = data[i];
    }
  }
  const query = db.write('carts')
    .where('id', data.id)
    .update(toBeUpdated);

  console.info("query -->", query.toQuery())
  return query;
};

exports.getAllFromUsersCart = async (order_id) => {
  const query = db.read.select('*')
  .from('carts')
  .where('order_id', '=', order_id);
  return query;
};

exports.getAllFromUsersCurrentCart = async (user_id) => {
  const query = db.read.select('carts.*')
  .from('carts')
  .join('orders','orders.id','=','carts.order_id')
  .where('carts.user_id', '=', user_id)
  .where('carts.stage', '=', 'cart')
  .where('orders.new', '=', 1);
  return query;
};

exports.getItemFromUsersCurrentCart = async (user_id, product_id) => {
  const query = db.read.select('carts.*')
  .from('carts')
  .join('orders','orders.id','=','carts.order_id')
  .where('carts.user_id', '=', user_id)
  .where('carts.product_id', '=', product_id)
  .where('carts.stage', '=', 'cart')
  .where('orders.new', '=', 1);
  return query;
};

exports.deleteFromCart = async (id) => {
  const query = db.write('carts')
  .from('carts')
  .where('id', '=', id)
  .del()
  return query;
};

exports.createShipment = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('shipment').insert({
    user_id: data.user_id,
    order_id: data.user_id,
    carier_company: data.carier_company,
    carier_id: data.carier_id,
    status: data.status,
    tracking_id: data.tracking_id || 0,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.info("query -->", query.toQuery())
  return query;
};

exports.updateShipment = async (data) => {
  data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

  const toBeUpdated = {};
  const canBeUpdated = ['tracking_id','status', 'updated_at'];
  for (let i in data) {
    if (canBeUpdated.indexOf(i) > -1) {
      toBeUpdated[i] = data[i];
    }
  }
  const query = db.write('shipment')
    .where('id', data.id)
    .update(toBeUpdated);

  console.info("query -->", query.toQuery())
  return query;
};

exports.getAllFromShipmentById = async (id) => {
  const query = db.read.select('*')
  .from('shipment')
  .where('id', '=', id);
  return query;
};

exports.createWarehouse = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('warehouse').insert({
    seller_id: data.seller_id || null,
    name: data.name || null,
    about_us: data.about_us || null,
    email: data.email || null,
    phone: data.phone || null,
    street: data.street || null,
    city: data.city || null,
    zipcode: data.zipcode || null,
    state: data.state || null,
    country: data.country || null,
    pictures: data.pictures || null,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.info("query -->", query.toQuery())
  return query;
};