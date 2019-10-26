'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateProductRegister = body => {
  const bodyStruct = {};
  const arr = ['name', 'sku', 'seller_id', 'picture', 'quantity', 'price', 'currency', 'one_time_limit']

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+'Missing');
    bodyStruct[item] = body[item];
  });

  return bodyStruct;
};

exports.validateProductCategory = body => {
  const bodyStruct = {};
  const arr = ['category' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+'Missing');
    bodyStruct[item] = body[item].trim()
  });

  return bodyStruct;
};