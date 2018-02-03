const always = require('./always');
const catchE = require('./catchE');
const chain = require('./chain');
const Either = require('./Either');
const map = require('./map');

module.exports = {
  always,
  catchE,
  chain,
  Either,
  either: Either.of,
  map,
};
