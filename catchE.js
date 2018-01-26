const curry = require('lodash/fp/curry');

const catchE = curry((f, e) => e.catch(f));

module.exports = catchE;
