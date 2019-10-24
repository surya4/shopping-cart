'use strict';

const getErrorResponse = (success, status, message) => {
  let errorResponse;
  switch (status) {
    case 400:
      errorResponse = Object.assign({}, { success, status, message: message || 'paramMissing' });
      break;
    case 401:
      errorResponse = Object.assign({}, { success, status, message: message || 'unauthorizedRequest' });
      break;
    case 404:
      errorResponse = Object.assign({}, { success, status, message: message || 'notFound' });
      break;
    default:
      errorResponse = Object.assign({}, { success, status: status || 520, message: message || 'errorFound' });
      break;
  }
  return errorResponse;
};

const getSuccessResponse = (success, status, data, meta, message) => {
  let successResponse;
  switch (status) {
    case 201:
      successResponse = Object.assign({}, { success, status, message: message || 'created', data, meta});
      break;
    case 202:
      successResponse = Object.assign({}, { success, status, message: message || 'accepted', data, meta });
      break;
    case 204:
      successResponse = Object.assign({}, { success, status, message: message || 'updated', data, meta });
      break;
    default:
      successResponse = Object.assign({}, { success, status: status || 200, message: message || 'success', data, meta });
      break;
  }
  return successResponse;
};

function customResponse(success, status, data = null, meta = null, message = null) {
  let response;
  if (success) {
    response = getSuccessResponse(success, status, data, meta, message)
  } else {
    response = getErrorResponse(success, status, message);
  }
  return response;
}

exports.customResponse = customResponse;
