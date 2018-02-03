const always = require('./always');
const catchR = require('./catchR');
const chain = require('./chain');
const Either = require('./Either');
const map = require('./map');

module.exports = {
  always,
  catchR,
  chain,
  Either,
  either: Either.of,
  map,
};
