const curry = require('lodash/fp/curry');

const lift = curry((Type, f, v) => Type.lift(f, v));

module.exports = lift;
