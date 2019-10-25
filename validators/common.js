'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateId = body => {
  const arr = ['id']

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
  });

  return body;
};