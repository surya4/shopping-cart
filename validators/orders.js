'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateOrderRegister = body => {
  const bodyStruct = {};
  const arr = ['product_id', 'user_id', 'quantity', 'sub_total', 'stage']

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
  });

  return bodyStruct;
};