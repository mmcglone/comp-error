const value = Symbol('value');
const hasError = Symbol('hasError');

class Either {
  constructor(val) {
    if (val instanceof Either) {
      this[value] = val[value];
    } else {
      this[value] = val;
    }
  }

  [hasError]() {
    return this[value] instanceof Error;
  }

  map(f) {
    if (this[hasError]()) {
      return this;
    }
    try {
      return new Either(f(this[value]));
    } catch (e) {
      return new Either(e);
    }
  }

  get value() {
    return this[value];
  }
  /* eslint-disable class-methods-use-this */
  set value(val) {
    throw new Error('Cannot change the value of an Either');
  }
  /* eslint-enable class-methods-use-this */

  catch(f) {
    if (this[hasError]()) {
      try {
        return new Either(f(this[value]));
      } catch (e) {
        return new Either(e);
      }
    }
    return this;
  }
}

module.exports = Either;
