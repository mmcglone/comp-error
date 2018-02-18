const Either = require('../src/Either');
const map = require('../src/map');

describe('map', () => {
  describe('when called with a function f and mapable m', () => {
    it('should return m.map(f)', () => {
      const m = new Either(12345);
      const f = value => value + 11;
      expect(map(f, m)).toEqual(new Either(12356));
    });
  });
});
