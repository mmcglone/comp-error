const main = require('../index');
const catchE = require('../catchE');
const Either = require('../Either');
const map = require('../map');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('catchE as its catchE method', () => {
      expect(main.catchE).toBe(catchE);
    });
    it('Either as its Either property', () => {
      expect(main.Either).toBe(Either);
    });
    it('map as its map method', () => {
      expect(main.map).toBe(map);
    });
  });
});
