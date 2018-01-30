const main = require('../index');
const always = require('../always');
const catchE = require('../catchE');
const chain = require('../chain');
const Either = require('../Either');
const map = require('../map');
const Maybe = require('../Maybe');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('always as its always method', () => {
      expect(main.always).toBe(always);
    });
    it('catchE as its catchE method', () => {
      expect(main.catchE).toBe(catchE);
    });
    it('chain as its chain method', () => {
      expect(main.chain).toBe(chain);
    });
    it('Either as its Either property', () => {
      expect(main.Either).toBe(Either);
    });
    it('Either.of as its either method', () => {
      expect(main.either).toBe(Either.of);
    });
    it('map as its map method', () => {
      expect(main.map).toBe(map);
    });
    it('Maybe as its Maybe property', () => {
      expect(main.Maybe).toBe(Maybe);
    });
    it('Maybe.of as its either method', () => {
      expect(main.maybe).toBe(Maybe.of);
    });
  });
});
