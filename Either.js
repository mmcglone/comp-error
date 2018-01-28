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

  [hasError]() {
    return this[value] instanceof Error;
  }

  chain(f) {
    if (this[hasError]()) {
      return this;
    }
    return f(this[value]);
  }

  always(f) {
    return f(this[value]);
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
