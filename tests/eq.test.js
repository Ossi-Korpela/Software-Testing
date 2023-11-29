import eq from "../src/eq"

describe('eq function', () => {


  it('returns true for identical primitive values', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('a', 'a')).toBe(true);
    expect(eq(true, true)).toBe(true);
  });

  it('returns false for different primitive values', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('a', 'b')).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

  it('returns true for the same object reference', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBe(true);
  });

  it('returns false for different objects with same content', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
  });

  it('handles NaN values', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('returns false when comparing undefined and null', () => {
    expect(eq(undefined, null)).toBe(false);
  });

  it('returns false for comparisons with coercion', () => {
    expect(eq(1, '1')).toBe(false);
    expect(eq(true, 'true')).toBe(false);
  });

  it('returns true or false for comparisons of complex objects based on reference', () => {
    const array = [1, 2, 3];
    expect(eq(array, array)).toBe(true);
    expect(eq(array, [1, 2, 3])).toBe(false);
  });

});