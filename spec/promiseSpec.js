const Either = require('../src/Either');
const promise = require('../src/promise');

describe('spec', () => {
  describe('when called with an object o that has a toPromise method as its argument', () => {
    const either = new Either(123);
    it('should call toPromise on o and return the result', () => {
      spyOn(either, 'toPromise').and.callThrough();
      promise(either).then((v1) => {
        expect(either.toPromise).toHaveBeenCalled();
        either.toPromise().then((v2) => {
          expect(v1).toBe(v2);
        });
      });
    });
  });
});
