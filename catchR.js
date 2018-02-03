const curry = require('lodash/fp/curry');

const catchR = curry((f, e) => e.catch(f));

module.exports = catchR;
