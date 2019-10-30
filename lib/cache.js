const bluebird = require('bluebird');
const redis = require('redis');

const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

bluebird.promisifyAll(redis);

const logStruct = (func, error) => {
  return { func, file: 'cacheLib', error}
}

client.on('error', (err) => console.error(logStruct('Redis is not running', err)));
client.on('ready', () => console.info('Redis is running'));

exports.set = async(key, value, expireIn) => {
  try {
    const response = await client.setAsync(key,JSON.stringify(value));
    if(expireIn) client.expireatAsync(key, parseInt((+new Date)/1000) + expireIn);
    return response;
  } catch (error) {
    console.error('error -> ', logStruct('set', error))
    throw error
  }
};

exports.get = async(key) => {
  try {
    const response = await client.getAsync(key);
    return JSON.parse(response);
  } catch (error) {
    console.error('error -> ', logStruct('get', error))
    throw error;
  }
};
