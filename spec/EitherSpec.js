const Either = require('../Either');

describe('An Either', () => {
  let either;
  beforeEach(() => {
    either = new Either(1);
  });
  it('should have a value', () => {
    expect(either.value).toBe(1);
  });
  it('should have a map method', () => {
    expect(either.map).toEqual(jasmine.any(Function));
  });
  it('should have a catch method', () => {
    expect(either.catch).toEqual(jasmine.any(Function));
  });
  describe('when created from a non-either', () => {
    it('should have that non-either as its value', () => {
      expect(either.value).toBe(1);
    });
  });
  describe('when created from an Either', () => {
    it('should have the value of that either as its value', () => {
      const either2 = new Either(either);
      expect(either2.value).toBe(1);
    });
  });
  describe('when an attempt is made to set its value using . syntax', () => {
    it('should throw an Error', () => {
      const shouldThrow = () => {
        either.value = 2;
      };
      expect(shouldThrow).toThrow(new Error('Cannot change the value of an Either'));
    });
  });

  describe('when its value is not a non-Error v', () => {
    describe('when its map method is called with a function f', () => {
      describe('when f does not throw', () => {
        it('should return an either whose value is f(v)', () => {
          const result = either.map(value => value + 3);
          expect(result).toEqual(jasmine.any(Either));
          expect(result.value).toBe(4);
        });
      });
      describe('when f throws an error e', () => {
        it('should return an either whose value is e', () => {
          const result = either.map(() => JSON.parse('"'));
          expect(result).toEqual(jasmine.any(Either));
          expect(result.value).toEqual(jasmine.any(Error));
        });
      });
    });
    describe('when its catch method is called with a function f', () => {
      it('should return an either whose value is v', () => {
        const result = either.catch(error => error.message);
        expect(result).toEqual(jasmine.any(Either));
        expect(result.value).toBe(1);
      });
    });
  });

  describe('when its value is an Error e', () => {
    const error = new Error('Some kind of error occurred');
    const eitherWithError = new Either(error);
    describe('when its map method is called with a function f', () => {
      it('should return an either whose value is e', () => {
        const result = eitherWithError.map(value => value + 3);
        expect(result).toEqual(jasmine.any(Either));
        expect(result.value).toBe(error);
      });
    });
    describe('when its catch method is called with a function f', () => {
      describe('when f does not throw', () => {
        it('should return an either whose value is f(e)', () => {
          const result = eitherWithError.catch(err => err.message);
          expect(result).toEqual(jasmine.any(Either));
          expect(result.value).toBe(error.message);
        });
      });
      describe('when f throws an error e', () => {
        it('should return an either whose value e', () => {
          const result = eitherWithError.catch(err => JSON.parse(err));
          expect(result).toEqual(jasmine.any(Either));
          expect(result.value).toEqual(jasmine.any(Error));
        });
      });
    });
  });
});
