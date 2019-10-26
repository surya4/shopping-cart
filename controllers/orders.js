const orderModel = require('../models/orders');
const {successResponse, errorResponse} = require('../lib/response');
const { validateOrderRegister, validateShipRegister, validateWarehouse } = require('../validators/orders');
const { validateId } = require('../validators/common');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'orderController', error}
}

const createOrder = async (reqData) => {
  try {
    const validInput = validateOrderRegister(reqData);
    const response = await orderModel.createOrder(validInput);
    return successResponse(201, response, null, 'created')
  } catch (error) {
    console.error('error -> ', logStruct('createOrder', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchOrder = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.fetchOrderById(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchOrder', error))
    return errorResponse(error.status, error.message);
  }
};

const updateOrder = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.updateOrder(validInput);
    return successResponse(201, null, null, 'updated')
  } catch (error) {
    console.error('error -> ', logStruct('updateOrder', error))
    return errorResponse(error.status, error.message);
  }
};

const addToCart = async (reqData) => {
  try {
    const validInput = validateOrderRegister(reqData);
    let newOrder = await orderModel.fetchNewOrder(validInput.user_id);

    if (!newOrder || !newOrder.length) {
      const response = await orderModel.createOrder(validInput);
      newOrder = await orderModel.fetchNewOrder(validInput.user_id);
    }

    validInput.order_id = newOrder[0].id;
    let response;
    const existing = await orderModel.fetchExistingProductFromCart(validInput);
    if (existing && existing.length) {
      response = await orderModel.updateCart({
        id: existing[0].id, 
        quantity: validInput.quantity + existing[0].quantity,
        sub_total: validInput.sub_total + existing[0].sub_total
      });
    } else {
      response = await orderModel.addToCart(validInput);
    }

    // update order async
    await orderModel.updateOrder({
      id: validInput.order_id, 
      quantity: newOrder[0].quantity + validInput.quantity,
      sub_total: newOrder[0].sub_total + validInput.sub_total,
    });

    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('addToCart', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchActiveCartByUser = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.getAllFromUsersCurrentCart(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchActiveCartByUser', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchUserCart = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.getAllFromUsersCart(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchUserCart', error))
    return errorResponse(error.status, error.message);
  }
};

const removeFromCart = async (reqData) => {
  try {
    const validInput = validateOrderRegister(reqData);
    const product = await orderModel.getItemFromUsersCurrentCart(validInput.user_id, validInput.product_id);

    const cartPayload = {
      id: product[0].id, 
      quantity: product[0].quantity - validInput.quantity > 0 ? product[0].quantity - validInput.quantity : 0 ,
      sub_total: product[0].sub_total - validInput.sub_total > 0 ? product[0].sub_total - validInput.sub_total : 0
    }

    if (cartPayload.quantity > 0) {
      response = await orderModel.updateCart(cartPayload);
    } else {
      response = await orderModel.deleteFromCart(cartPayload.id);
    }

    const order = await orderModel.fetchOrderById(product[0].order_id);
    console.log("order --->", order);

    const orderPayload = {
      id: order[0].id, 
      quantity: order[0].quantity - validInput.quantity > 0 ? order[0].quantity - validInput.quantity : 0 ,
      sub_total: order[0].sub_total - validInput.sub_total > 0 ? order[0].sub_total - validInput.sub_total : 0
    };

    await orderModel.updateOrder(orderPayload);

    return successResponse(204, response, null, 'removed')
  } catch (error) {
    console.error('error -> ', logStruct('removeFromCart', error))
    return errorResponse(error.status, error.message);
  }
};

const createShipment = async (reqData) => {
  try {
    const validInput = validateShipRegister(reqData);
    const response = await orderModel.createShipment(validInput);
    return successResponse(201, response, null, 'created')
  } catch (error) {
    console.error('error -> ', logStruct('createShipment', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchUserShipment = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.getAllFromShipmentById(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchUserShipment', error))
    return errorResponse(error.status, error.message);
  }
};

const updateUserShipment = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await orderModel.updateShipment(validInput);
    return successResponse(204, response, null, 'updated')
  } catch (error) {
    console.error('error -> ', logStruct('updateUserShipment', error))
    return errorResponse(error.status, error.message);
  }
};

const createWarehouse = async (reqData) => {
  try {
    const validInput = validateWarehouse(reqData);
    console.log("input -->", validInput)
    const response = await orderModel.createWarehouse(validInput);
    return successResponse(201, response, null, 'created')
  } catch (error) {
    console.error('error -> ', logStruct('createWarehouse', error))
    return errorResponse(error.status, error.message);
  }
};

// db scripts
// const dbScripts = require('../lib/db_script')

module.exports = {
  createOrder,
  fetchOrder,
  updateOrder,
  addToCart,
  fetchUserCart, 
  removeFromCart,
  createShipment,
  fetchUserShipment,
  updateUserShipment,
  fetchActiveCartByUser,
  createWarehouse
}