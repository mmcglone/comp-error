const main = require('../index');
const Either = require('../Either');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
  describe('and that object should have', () => {
    it('Either as its Either property', () => {
      expect(main.Either).toBe(Either);
    });
  });
});
