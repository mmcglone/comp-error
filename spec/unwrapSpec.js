const Either = require('../src/Either');
const unwrap = require('../src/unwrap');

describe('unwrap', () => {
  describe('when called with an unwrappable u', () => {
    it('should return u.unwrap()', () => {
      const u = new Either(12345);
      expect(unwrap(u)).toEqual(12345);
    });
  });
});
