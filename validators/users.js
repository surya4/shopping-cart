'use strict';


const {successResponse, errorResponse} = require('../lib/response');

exports.validateUserRegister = body => {
  const bodyStruct = {};
  const arr = ['name', 'email', 'phone', 'password', 'street', 'city', 'state',
    'country', 'gender' ];

    if (!body.password || body.password.length < 4) {
      throw errorResponse(401);
    }

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item].trim()
  });

  return bodyStruct;
};

exports.validateUserPermission = body => {
  const bodyStruct = {};
  const arr = ['user_id', 'role_id' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item];
  });

  return bodyStruct;
};

exports.validateUserRole = body => {
  const bodyStruct = {};
  const arr = ['role' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item].trim()
  });

  return bodyStruct;
};

exports.validateUserToken = body => {
  const bodyStruct = {};
  const arr = ['token', 'expiry' ]

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item].trim()
  });

  return bodyStruct;
};

exports.validateAuth = body => {
  const bodyStruct = {};
  const arr = ['user_name', 'password' ];

  if (!body.password || body.password.length < 4) {
    throw errorResponse(401);
  }

  arr.map((item) => {
    const check = body.hasOwnProperty(item);
    if (!check) throw errorResponse(400, item+' missing');
    bodyStruct[item] = body[item];
  });

  return bodyStruct;
};

