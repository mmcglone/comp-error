const main = require('../index');
const catchR = require('../catchR');
const chain = require('../chain');
const Either = require('../Either');
const lift = require('../lift');
const map = require('../map');
const promise = require('../promise');
const unwrap = require('../unwrap');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('catchR as its catchR method', () => {
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
    it('map as its lift method', () => {
      expect(main.lift).toBe(lift);
    });
    it('map as its map method', () => {
      expect(main.map).toBe(map);
    });
    it('promise as its promise method', () => {
      expect(main.promise).toBe(promise);
    });
    it('unwrap as its unwrap method', () => {
      expect(main.unwrap).toBe(unwrap);
    });
  });
});
