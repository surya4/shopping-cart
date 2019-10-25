// const userDb = require('../db/users');
// const orderDb = require('../db/orders');
// const productDb = require('../db/products');

const db = require('../models/db');
const moment = require('moment');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

exports.getDetailsById = async (id) => {
  const query = db.read.select('*')
  .from('users')
  .where('id', '=', id);;
  return query;
};

exports.getUserDetailsByNameOrEmail = async (input) => {
  const query = db.read.select('*')
  .from('users')
  .where('name', '=', input)
  .orWhere('email', '=', input);
  return query;
};

exports.createUser = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('users').insert({
    name: data.name || null,
    email: data.email || null,
    password: data.password || null,
    about_me: data.about_me || null,
    phone: data.phone || null,
    verified_email: data.verified_email || 0,
    verified_phone: data.verified_phone || 0,
    DOB: data.DOB || null,
    street: data.street || null,
    city: data.city || null,
    zipcode: data.zipcode || null,
    state: data.state || null,
    country: data.country || null,
    picture: data.picture || null,
    latitude: data.latitude || null,
    longitude: data.longitude || null,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};


exports.createPermission = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('user_permission').insert({
    user_id: data.user_id,
    role_id: data.role_id || 1,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};

exports.createUserRole = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('user_role').insert({
    role: data.role,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};


exports.createUserToken = async (data) => {
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = db.write('invalid_token').insert({
    token: data.token,
    expiry: data.expiry,
    created_at: createdAt,
    updated_at: createdAt
  });
  console.log("query -->", query.toQuery())
  return query;
};

exports.getUserPermission = async (user_id) => {
  const query = db.read.select('user_role.role')
  .from('user_permission')
  .join('user_role', 'user_permission.role_id', '=', 'user_role.id')
  .where('user_id', '=', user_id)
  console.log("query -->", query.toQuery())
  return query;
};