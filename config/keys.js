if (process.env.NODE_ENV === 'production') {
  //WE ARE IN PRODUCTION
  module.exports = require('./prod');
} else {
  //WE ARE IN DEV RETURN DEV KEYS!
  module.exports = require('./dev');
}
