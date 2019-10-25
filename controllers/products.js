const prodModel = require('../models/products');
const {successResponse, errorResponse} = require('../lib/response');
const { validateProductRegister, validateSeller, validateWarehouse, validateProductCategory } = require('../validators/products');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'prodController', error}
}

const createProductCategory = async (reqData) => {
  try {
    const validInput = validateProductCategory(reqData);  
    const prodData = await prodModel.createProductCategory(validInput);
    return successResponse(200, prodData)
  } catch (error) {
    console.error('error -> ', logStruct('createProductCategory', error))
    return errorResponse(error.status, error.message);
  }
};

const createProduct = async (reqData) => {
  try {
    const validInput = validateProductRegister(reqData);
    const prodData = await prodModel.createProduct(validInput);
    return successResponse(200, prodData)
  } catch (error) {
    console.error('error -> ', logStruct('createProduct', error))
    return errorResponse(error.status, error.message);
  }
};

const createSeller = async (reqData) => {
  try {
    const validInput = validateSeller(reqData);
    const prodData = await prodModel.createSeller(validInput);
    return successResponse(200, prodData)
  } catch (error) {
    console.error('error -> ', logStruct('createSeller', error))
    return errorResponse(error.status, error.message);
  }
};

const createWarehouse = async (reqData) => {
  try {
    const validInput = validateWarehouse(reqData);
    const prodData = await prodModel.createWarehouse(validInput);
    return successResponse(200, prodData)
  } catch (error) {
    console.error('error -> ', logStruct('createWarehouse', error))
    return errorResponse(error.status, error.message);
  }
};

// const fetchProd = async (reqData) => {
//   try {
//     const validInput = validateUserRegister(reqData);
//     const userData = await userModel.getDetailsById(validInput.user_id);
//     console.log("userData --> ", userData);
//     return successResponse(200, userData)
//   } catch (error) {
//     console.error('error -> ', logStruct('fetchUser', error))
//     return errorResponse(error.status, error.message);
//   }
// };

// const fetchUser = async (reqData) => {
//   try {
//     const validInput = validateUserRegister(reqData);
//     const userData = await userModel.getDetailsById(validInput.user_id);
//     console.log("userData --> ", userData);
//     return successResponse(200, userData)
//   } catch (error) {
//     console.error('error -> ', logStruct('fetchUser', error))
//     return errorResponse(error.status, error.message);
//   }
// };

// const fetchUser = async (reqData) => {
//   try {
//     const validInput = validateUserRegister(reqData);
//     const userData = await userModel.getDetailsById(validInput.user_id);
//     console.log("userData --> ", userData);
//     return successResponse(200, userData)
//   } catch (error) {
//     console.error('error -> ', logStruct('fetchUser', error))
//     return errorResponse(error.status, error.message);
//   }
// };

module.exports = {
  createProduct, 
  createProductCategory,
  createSeller,
  createWarehouse
}