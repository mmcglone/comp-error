const main = require('../index');
const always = require('../always');
const catchR = require('../catchR');
const chain = require('../chain');
const Either = require('../Either');
const map = require('../map');
const promise = require('../promise');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('always as its always method', () => {
      expect(main.always).toBe(always);
    });
    it('catchE as its catchR method', () => {
      expect(main.catchR).toBe(catchR);
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
    it('promise as its promise method', () => {
      expect(main.promise).toBe(promise);
    });
  });
});
