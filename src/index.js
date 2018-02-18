// @flow
const catchR = require('./catchR');
const chain = require('./chain');
const Either = require('./Either');
const lift = require('./lift');
const map = require('./map');
const promise = require('./promise');
const unwrap = require('./unwrap');

module.exports = {
  unwrap,
  catchR,
  chain,
  Either,
  either: Either.of,
  lift,
  map,
  promise,
};
