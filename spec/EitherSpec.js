const Either = require('../Either');
const identity = require('lodash/fp/identity');

describe('An Either', () => {
  const either = new Either(1);
  const error = new Error('Some kind of error occurred');
  const eitherWithError = new Either(error);

  /* existence and readability of value */
  it('should wrap a value that can be read through its "always" method using an identify function', () => {
    expect(either.always(identity)).toEqual(1);
    expect(eitherWithError.always(identity)).toEqual(error);
  });

  /* creation */
  describe('when created from a non-either', () => {
    it('should have that non-either as its value', () => {
      expect(either.always(identity)).toBe(1);
    });
  });
  describe('when created from an Either', () => {
    it('should have the value of that either as its value', () => {
      const either2 = new Either(either);
      expect(either2.always(identity)).toBe(1);
    });
  });

  /* always */
  describe('when its "always" method is called with a function f', () => {
    describe('regardless of whether its value v is an Error or a non-Error', () => {
      it('should return f(v)', () => {
        expect(either.always(value => value.toString())).toBe('1');
        expect(eitherWithError.always(value => value.toString())).toBe('Error: Some kind of error occurred');
      });
    });
  });

  /* chain */
  describe('when its "chain" method is called with a function f', () => {
    describe('when its value is a non-Error v', () => {
      it('should return f(v)', () => {
        expect(either.chain(value => value + 3)).toBe(4);
      });
    });
    describe('when its value is an Error e', () => {
      describe('when its chain method is called with a function f', () => {
        it('should return an Either whose value is e', () => {
          const result = eitherWithError.chain(value => value + 3);
          expect(result).toEqual(jasmine.any(Either));
          expect(result.always(identity)).toBe(error);
        });
      });
    });
  });

  /* map */
  describe('when its map method is called with a function f', () => {
    describe('when its value is a non-Error v', () => {
      it('should return an Either whose value is f(v)', () => {
        const result = either.map(value => value + 3);
        expect(result).toEqual(jasmine.any(Either));
        expect(result.always(identity)).toBe(4);
      });
    });
    describe('when its value is an Error e', () => {
      describe('when its map method is called with a function f', () => {
        it('should return an Either whose value is e', () => {
          const result = eitherWithError.map(value => value + 3);
          expect(result).toEqual(jasmine.any(Either));
          expect(result.always(identity)).toBe(error);
        });
      });
    });
  });

  /* catch */
  describe('when its catch method is called with a function f', () => {
    describe('when its value is a non-Error v', () => {
      it('should return an Either whose value is v', () => {
        const result = either.catch(err => err.message);
        expect(result).toEqual(jasmine.any(Either));
        expect(result.always(identity)).toBe(1);
      });
    });
    describe('when its value is an Error e', () => {
      it('should return an Either whose value is f(e)', () => {
        const result = eitherWithError.catch(err => err.message);
        expect(result).toEqual(jasmine.any(Either));
        expect(result.always(identity)).toBe(error.message);
      });
    });
  });

  /* promise */
  describe('when its toPromise method is called', () => {
    describe('when its value is a non-Error v', () => {
      it('should return a promise that resolves to v', () => {
        const shouldHaveBeenCalled = jasmine.createSpy('shouldBeCalled');
        either.toPromise()
          .then((value) => {
            shouldHaveBeenCalled();
            expect(value).toBe(1);
          })
          .then(() => {
            expect(shouldHaveBeenCalled).toHaveBeenCalled();
          });
      });
    });
    describe('when its value is an Error e', () => {
      it('should return a Promise that rejects with e as its reason', () => {
        const shouldHaveBeenCalled = jasmine.createSpy('shouldHaveBeenCalled');
        eitherWithError.toPromise()
          .catch((err) => {
            shouldHaveBeenCalled();
            expect(err).toBe(error);
          })
          .then(() => {
            expect(shouldHaveBeenCalled).toHaveBeenCalled();
          });
      });
    });
  });
});

describe('The static method Either.of', () => {
  describe('when called with a value v', () => {
    it('should return an Either whose value is v', () => {
      const val = 123;
      const either = Either.of(val);
      expect(either).toEqual(jasmine.any(Either));
      expect(either.always(identity)).toBe(val);
    });
  });
});
