'use strict';


const customResponse = require('../lib/response').customResponse;

exports.validateProductRegister = body => {
  const bodyStruct = {};

  if (!body.name || !body.seller_id || !body.pictures || !body.quantity || !body.price || 
    !body.currency || !body.one_time_limit) {
    throw customResponse(false, 400)
  }

  try {
    Object.keys(body).map(k => bodyStruct[k] = body[k].trim());
  } catch (error) {
    throw customResponse(false, 400)
  }

  console.log("bodyStruct", bodyStruct)
 
  return bodyStruct;
};