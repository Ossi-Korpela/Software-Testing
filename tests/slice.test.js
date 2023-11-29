import slice from "../src/slice"

describe('slice function', () => {
  const array = [1, 2, 3, 4];

  it('slices an array with standard start and end values', () => {
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  it('uses default parameters when start and end are omitted', () => {
    expect(slice(array)).toEqual([1, 2, 3, 4]);
  });

  it('handles negative start index', () => {
    expect(slice(array, -2)).toEqual([3, 4]);
  });

  it('handles negative end index', () => {
    expect(slice(array, 1, -1)).toEqual([2, 3]);
  });

  it('returns an empty array if start index is greater than end index', () => {
    expect(slice(array, 3, 2)).toEqual([]);
  });

  it('handles start or end index out of bounds', () => {
    expect(slice(array, -10, 10)).toEqual([1, 2, 3, 4]);
  });

  it('returns an empty array for empty array input', () => {
    expect(slice([], 1, 2)).toEqual([]);
  });


});