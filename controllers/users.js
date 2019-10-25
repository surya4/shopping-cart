const userModel = require('../models/users');
const {successResponse, errorResponse} = require('../lib/response');
const { validateUserRegister, validateUserRole, validateUserPermission } = require('../validators/users');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'userController', error}
}

const createUser = async (reqData) => {
  try {
    const validInput = validateUserRegister(reqData);
    const userData = await userModel.createUser(validInput);
    return successResponse(200, userData)
  } catch (error) {
    console.error('error -> ', logStruct('createUser', error))
    return errorResponse(error.status, error.message);
  }
};

const createUserPermission = async (reqData) => {
  try {
    const validInput = validateUserPermission(reqData);
    const userData = await userModel.createPermission(validInput);
    return successResponse(200, userData)
  } catch (error) {
    console.error('error -> ', logStruct('createUserPermission', error))
    return errorResponse(error.status, error.message);
  }
};

const createUserRole = async (reqData) => {
  try {
    const validInput = validateUserRole(reqData);
    const userData = await userModel.createUserRole(validInput);
    return successResponse(200, userData)
  } catch (error) {
    console.error('error -> ', logStruct('createUserRole', error))
    return errorResponse(error.status, error.message);
  }
};

const createUserToken = async (reqData) => {
  try {
    const validInput = validateUserToken(reqData);
    const userData = await userModel.createUserToken(validInput);
    return successResponse(200, userData)
  } catch (error) {
    console.error('error -> ', logStruct('createUserToken', error))
    return errorResponse(error.status, error.message);
  }
};

// to-do
// const fetchUser = async (reqData) => {
//   try {
//     const validInput = validateUserRegister(reqData);
//     const userData = await userModel.getDetailsById(validInput.user_id);
//     return successResponse(200, userData)
//   } catch (error) {
//     console.error('error -> ', logStruct('fetchUser', error))
//     return errorResponse(error.status, error.message);
//   }
// };


module.exports = {
  createUser,
  fetchUser,
  createUserPermission,
  createUserPermission,
  createUserRole,
  createUserToken
}

