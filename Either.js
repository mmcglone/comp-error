const value = Symbol('value');
const hasError = Symbol('hasError');

class Either {
  constructor(val) {
    this[value] = (val instanceof Either) ? val[value] : val;
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
    try {
      return f(this[value]);
    } catch (error) {
      return error;
    }
  }

  always(f) {
    return f(this[value]);
  }

  map(f) {
    if (this[hasError]) {
      return this;
    }
    try {
      return new Either(f(this[value]));
    } catch (error) {
      return new Either(error);
    }
  }

  catch(f) {
    if (!this[hasError]) {
      return this;
    }
    try {
      return new Either(f(this[value]));
    } catch (error) {
      return new Either(error);
    }
  }
}

module.exports = Either;
