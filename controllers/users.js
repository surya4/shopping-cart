const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = require('../models/users');
const {successResponse, errorResponse} = require('../lib/response');
const { validateUserRegister, validateUserRole, validateUserPermission, 
  validateAuth } = require('../validators/users');
const { validateId } = require('../validators/common');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'userController', error}
}

const createUser = async (reqData) => {
  try {
    const validInput = validateUserRegister(reqData);
    const checkIfUserExists = await userModel.getUserDetailsByEmail(validInput.email);
    if (checkIfUserExists && checkIfUserExists.length) {
      return errorResponse(403, 'userExists');
    }
    validInput.password = bcrypt.hashSync(String(validInput.password), saltRounds);
    const response = await userModel.createUser(validInput);
    await userModel.createPermission({user_id: response[0]});
    return successResponse(201, response, { user_roles: ['customer'], email: validInput.email}, 'userRegistered')
  } catch (error) {
    console.error('error -> ', logStruct('createUser', error))
    return errorResponse(error.status, error.message);
  }
};

const createUserPermission = async (reqData) => {
  try {
    const validInput = validateUserPermission(reqData);
    const response = await userModel.createPermission(validInput);
    return successResponse(201, response)
  } catch (error) {
    console.error('error -> ', logStruct('createUserPermission', error))
    return errorResponse(error.status, error.message);
  }
};

const createUserRole = async (reqData) => {
  try {
    const validInput = validateUserRole(reqData);
    const response = await userModel.createUserRole(validInput);
    return successResponse(201, response)
  } catch (error) {
    console.error('error -> ', logStruct('createUserRole', error))
    return errorResponse(error.status, error.message);
  }
};

const fetchUser = async (reqData) => {
  console.log("here2")
  try {
    const validInput = validateId(reqData);
    const response = await userModel.getDetailsById(validInput.id);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('fetchUser', error))
    return errorResponse(error.status, error.message);
  }
};

// to-do
const createUserToken = async (reqData) => {
  try {
    const validInput = validateUserToken(reqData);
    const response = await userModel.createUserToken(validInput);
    return successResponse(200, response)
  } catch (error) {
    console.error('error -> ', logStruct('createUserToken', error))
    return errorResponse(error.status, error.message);
  }
};

const loginUser = async (reqData) => {
  try {
    const validInput = validateAuth(reqData);
    const response = await userModel.getUserDetailsByNameOrEmail(validInput.user_name);
    const matched = bcrypt.compareSync(String(validInput.password), response[0].password)
    if (!matched) return errorResponse(401);
    const role_response = await userModel.getUserPermission(response[0].id);
    const user_roles = role_response.map(el => el.role);
    return successResponse(200, response, {user_roles, email: response[0].email})
  } catch (error) {
    console.error('error -> ', logStruct('fetchUser', error))
    return errorResponse(error.status, error.message);
  }
};


module.exports = {
  createUser,
  fetchUser,
  createUserPermission,
  createUserPermission,
  createUserRole,
  createUserToken,
  loginUser
}

