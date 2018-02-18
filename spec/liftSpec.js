const Either = require('../src/Either');
const lift = require('../src/lift');

describe('lift', () => {
  describe('when called with a liftable type T, func f, and value v', () => {
    it('should return an either whose value equals the value of T.lift(f, v)', () => {
      const T = Either;
      const f = a => a + 1;
      const v = 123;
      const either = lift(T, f, v);
      expect(either.unwrap()).toEqual(T.lift(f, v).unwrap());
    });
  });
});
