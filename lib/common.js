const {errorResponse, successResponse} = require('./response')
exports.authenticator = (req) => {
  if (!req.session.email || !req.session.password || !req.session.user_roles 
    || !req.session.user_roles.length) {
    throw errorResponse(401);
  }

  // add redis and store data there

}

exports.allowCustomer = (req) => {
  if (!req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('customer') < 0) {
    throw errorResponse(401);
  }
}

exports.allowAdmin = (req) => {
  if (!req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('admin') < 0) {
    throw errorResponse(401);
  }
}

exports.allowSeller = (req) => {
  if (!req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('seller') < 0) {
    throw errorResponse(401);
  }
}