import map from "../src/map"

describe('map function', () => {

  it('applies the iteratee to each element', () => {
    const square = n => n * n;
    expect(map([2, 4, 6], square)).toEqual([4, 16, 36]);
  });

  it('works with different iteratee functions', () => {
    const double = n => n * 2;
    expect(map([1, 2, 3], double)).toEqual([2, 4, 6]);
  });

  it('handles an empty array', () => {
    const square = n => n * n;
    expect(map([], square)).toEqual([]);
  });

  it('handles single element', () => {
    const square = n => n * n;
    expect(map([2], square)).toEqual([4]);
  });

  it('handles non-array input', () => {
    const square = n => n * n;
    expect(() => map(null, square)).toThrow();
  });

  it('handles non-function iteratee', () => {
    expect(() => map([1, 2, 3], 'not a function')).toThrow();
  });

  it('handles missing values correctly', () => {
    const identity = n => n;
    expect(map([1, , 3], identity)).toEqual([1, undefined, 3]);
  });

  it('handles errors in the iteratee', () => {
    const testError = () => { throw new Error('Test error'); };
    expect(() => map([1, 2, 3], testError)).toThrow('Test error');
  });

});