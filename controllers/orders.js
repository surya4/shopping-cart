const {successResponse, errorResponse} = require('../lib/response');
const { validateOrderRegister } = require('../validators/orders');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'orderController', error}
}

const createOrder = async (reqData) => {
  try {
    const OrderData = validateOrderRegister(reqData);
    return successResponse(200, OrderData)
  } catch (error) {
    console.error('error -> ', logStruct('createOrder', error))
    return errorResponse(error.status, error.message);
  }
};

module.exports = {
  createOrder
}