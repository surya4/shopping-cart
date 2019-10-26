'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateId = body => {
  const arr = ['id'];

  if (isNaN(body.id)) {
    throw errorResponse(401);
  }

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+'Missing');
  });

  return body;
};