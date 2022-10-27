
const Redis = require("ioredis");



const createClient = ({ url }) => {

  const redis = new Redis(url);

  //register client events
  redis.on('error', (error) => {
    console.log('error', error);
  });

  redis.on('end', () => {
    console.log('shutting down service due to lost Redis connection');
  });

  return redis;
}


exports.createClient = createClient;
