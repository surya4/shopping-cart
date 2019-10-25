const customResponse = require('../lib/response').customResponse;
const { validateOrderRegister } = require('../validators/orders');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'orderController', error}
}

const createOrder = async (reqData) => {
  try {
    const OrderData = validateOrderRegister(reqData);
    // console.log("OrderData --> ", OrderData);
    return customResponse(true, 200, OrderData)
  } catch (error) {
    console.error('error -> ', logStruct('createOrder', error))
    return customResponse(false)
  }
};

module.exports = {
  createOrder
}