// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');

const db = require('../models/db');
const moment = require('moment');

exports.getDetailsById = async (id) => {
  const query = db.read.select('*')
  .from('products')
  .where('id', '=', id);;
  return query;
};

exports.createProduct = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('products').insert({
    name: data.name || null,
    sku: data.sku || null,
    description: data.description || null,
    seller_id: data.seller_id || null,
    warehouse_id: data.warehouse_id || null,
    quantity: data.quantity || null,
    price: data.price || null,
    one_time_limit: data.one_time_limit || null,
    currency: data.currency || null,
    available: data.available || 0,
    picture: data.picture || null,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};

exports.updateProduct = async (data) => {
  data.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
  const toBeUpdated = {};
  const canBeUpdated = ['name','description', 'seller_id', 'warehouse_id', 
  'updated_at', 'quantity', 'price', 'currency', 'one_time_limit', 'picture'];
  for (let i in data) {
    if (canBeUpdated.indexOf(i) > -1) {
      toBeUpdated[i] = data[i];
    }
  }
  const query = db.write('products')
    .where('id', data.id)
    .update(toBeUpdated);

  console.log("query -->", query.toQuery())
  return query;
};

exports.removeProduct = async (id) => {
  const query = db.write('products')
    .where('id', id)
    .update({
      available: 0,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  console.log("query -->", query.toQuery())
  return query;
};

exports.reAddProduct = async (id) => {
  const query = db.write('products')
    .where('id', id)
    .update({
      available: 1,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  console.log("query -->", query.toQuery())
  return query;
};

exports.createSeller = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('seller').insert({
    user_id: data.user_id || null,
    name: data.name || null,
    about_us: data.about_us || null,
    email: data.email || null,
    phone: data.phone || null,
    verified_phone: data.verified_phone || 0,
    verified_email: data.verified_email || 0,
    verified_account: data.verified_account || 0,
    DOB: data.DOB || null,
    street: data.street || null,
    city: data.city || null,
    zipcode: data.zipcode || null,
    state: data.state || null,
    country: data.country || null,
    logo: data.logo || null,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
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
  console.log("query -->", query.toQuery())
  return query;
};


exports.createProductCategory = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('product_category').insert({
    category: data.category,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};