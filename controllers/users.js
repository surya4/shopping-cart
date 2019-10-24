const customResponse = require('../lib/response').customResponse;
const { validateUserRegister } = require('../validators/users');

const logStruct = (func, error) => {
  return {'func': func, 'file': 'userController', error}
}

const createUser = async (reqData) => {
  try {
    const userData = validateUserRegister(reqData);
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

