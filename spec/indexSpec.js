const main = require('../index');

describe('The main module', () => {
  it('should export an object', () => {
    expect(main).toEqual(jasmine.any(Object));
  });
});
