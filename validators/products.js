'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateProductRegister = body => {
  const bodyStruct = {};
  const arr = ['name', 'sku', 'seller_id', 'picture', 'quantity', 'price', 'currency', 'one_time_limit']

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
  });

  return bodyStruct;
};

exports.validateProductCategory = body => {
  const bodyStruct = {};
  const arr = ['category' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item].trim()
  });

  return bodyStruct;
};

exports.validateSeller = body => {
  const bodyStruct = {};
  const arr = ['user_id', 'about_us', 'logo', 'name', 'verified', 'email', 'phone', 'street',  'city', 'state',
  'country' ];

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
  });

  return bodyStruct;
};

exports.validateWarehouse = body => {
  const bodyStruct = {};
  const arr = ['seller_id', 'pictures', 'about_us', 'verified', 'email', 'phone', 'street',  'city', 'state',
  'country' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
  });

  return bodyStruct;
};