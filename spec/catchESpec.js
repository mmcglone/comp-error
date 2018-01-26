const Either = require('../Either');
const catchE = require('../catchE');

describe('catchE', () => {
  describe('when called with a function f and catchable c', () => {
    it('should return c.catch(f)', () => {
      const e = new Error('There was an error');
      const c = new Either(e);
      const f = error => error.message;
      expect(catchE(f, c)).toEqual(new Either(e.message));
    });
  });
});
