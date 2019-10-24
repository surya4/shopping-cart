'use strict';


const customResponse = require('../lib/response').customResponse;

exports.validateUserRegister = body => {
  const bodyStruct = {};

  if (!body.name || !body.email || !body.password || !body.phone || !body.address || 
    !body.city || !body.state || !body.country || !body.age || !body.gender) {
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