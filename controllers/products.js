const prodModel = require('../models/products');
const {successResponse, errorResponse} = require('../lib/response');
const { validateProductRegister, validateProductCategory } = 
require('../validators/products');
const { validateId } = require('../validators/common');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'prodController', error}
}

const createProductCategory = async (reqData) => {
  try {
    const validInput = validateProductCategory(reqData);  
    const response = await prodModel.createProductCategory(validInput);
    return successResponse(201, response, 'created')
  } catch (error) {
    console.error('error -> ', logStruct('createProductCategory', error))
    return errorResponse(error.status, error.message);
  }
};

const createProduct = async (reqData) => {
  try {
    const validInput = validateProductRegister(reqData);
    const response = await prodModel.createProduct(validInput);
    return successResponse(201, response, 'created')
  } catch (error) {
    console.error('error -> ', logStruct('createProduct', error))
    return errorResponse(error.status, error.message);
  }
};

const updateProduct = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await prodModel.updateProduct(validInput);
    return successResponse(204)
  } catch (error) {
    console.error('error -> ', logStruct('updateProduct', error))
    return errorResponse(error.status, error.message);
  }
};

const removeProduct = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await prodModel.removeProduct(validInput.id);
    return successResponse(204, null, null, 'removed')
  } catch (error) {
    console.error('error -> ', logStruct('removeProduct', error))
    return errorResponse(error.status, error.message);
  }
};

const reAddProduct = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    await prodModel.reAddProduct(validInput.id);
    return successResponse(204, null, null, 'readded')
  } catch (error) {
    console.error('error -> ', logStruct('reAddProduct', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchProd = async (reqData) => {
  try {
    const validInput = validateId(reqData);
    const response = await prodModel.getDetailsById(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchUser', error))
    return errorResponse(error.status, error.message);
  }
};

module.exports = {
  createProduct, 
  updateProduct,
  reAddProduct,
  removeProduct,
  fetchProd,
  createProductCategory,
}