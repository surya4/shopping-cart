const {errorResponse, successResponse} = require('./response');
const cache = require('./cache');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'commonLib', error}
}

exports.authenticator = async (req, res, next) => {
  try {
    if (!req.session || !req.session.email || !req.session.password || !req.session.user_roles 
      || !req.session.user_roles.length) {
        return res.status(401).send(errorResponse(401));
    }

    const cacheData = await cache.get(req.sessionID);

    if (!cacheData) {
      const expiry = parseInt(process.env.SESS_LIFETIME)/1000 || 60 * 5;
      await cache.set(req.sessionID, req.session, expiry)
    };

    next();

  } catch (error) {
    console.error('error -> ', logStruct('authenticator', error))
    return res.status(401).send(errorResponse(401));
  }

}

exports.allowCustomer = (req, res, next) => {
  if (!req.session || !req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('customer') < 0) {
      return res.status(401).send(errorResponse(401));
  }
  next();
}

exports.allowAdmin = (req, res, next) => {
  if (!req.session || !req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('admin') < 0) {
      return res.status(401).send(errorResponse(401));
  }
  next();
}

exports.allowSeller = (req, res, next) => {
  if (!req.session || !req.session.user_roles || !req.session.user_roles.length ||
    req.session.user_roles.indexOf('seller') < 0) {
      return res.status(401).send(errorResponse(401));
  }
  next();
}