'use strict';


const customResponse = require('../lib/response').customResponse;

exports.validateOrderRegister = body => {
  const bodyStruct = {};

  if (!body.product_id || !body.user_id || !body.quantity || !body.sub_total || !body.stage) {
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