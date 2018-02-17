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
    return this[hasError] ? this : f(this[value]);
  }

  unwrap() {
    return this[value];
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

  static lift(f, v) {
    return new Either(v).map(f);
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

  toPromise() {
    const method = this[hasError] ? 'reject' : 'resolve';
    return Promise[method](this[value]);
  }
}

module.exports = Either;
