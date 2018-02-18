// @flow

type hasToPromise = {
  toPromise: () => Promise<any>
};

const promise = (obj: hasToPromise): Promise<any> => obj.toPromise();

module.exports = promise;

const obj = {
  toPromise: () => Promise.resolve(),
};

promise(obj);
