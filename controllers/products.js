const customResponse = require('../lib/response').customResponse;
const { validateProductRegister } = require('../validators/products');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'productsController', error}
}

const createUser = async (reqData) => {
  try {
    const userData = validateProductRegister(reqData);
    // console.log("userData --> ", userData);
    return customResponse(true, 200, reqData)
  } catch (error) {
    console.error('error -> ', logStruct('createUser', error))
    return customResponse(false)
  }
};

module.exports = {
  createUser
}