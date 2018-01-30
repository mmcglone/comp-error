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

  static of(val) {
    return new Either(val);
  }

  get [hasError]() {
    return this[value] instanceof Error;
  }

  chain(f) {
    if (this[hasError]) {
      return this;
    }
    return f(this[value]);
  }

  always(f) {
    return f(this[value]);
  }

  map(f) {
    return this[hasError] ? this : new Either(f(this[value]));
  }

  catch(f) {
    return this[hasError] ? new Either(f(this[value])) : this;
  }
}

module.exports = Either;
