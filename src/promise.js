// @flow

type promisfiable = {
  toPromise: () => Promise<any>
};

const promise = (obj: promisfiable): Promise<any> => obj.toPromise();

module.exports = promise;

const obj = {
  toPromise: () => promise.resolve(),
};

promise(obj);
