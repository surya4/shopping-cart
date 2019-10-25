const userModel = require('../models/users');
const customResponse = require('../lib/response').customResponse;
const { validateUserRegister } = require('../validators/users');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'userController', error}
}

const createUser = async (reqData) => {
  try {
    // const validInput = validateUserRegister(reqData);
    const userData = await userModel.getDetailsById(reqData.user_id);
    console.log("userData --> ", userData);
    return customResponse(true, 200, userData)
  } catch (error) {
    console.error('error -> ', logStruct('createUser', error))
    return customResponse(false)
  }
};

module.exports = {
  createUser
}

