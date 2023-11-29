import get from "../src/get"

describe('get function', () => {

  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('accesses nested object properties using string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('accesses nested object properties using array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('returns undefined for non-existent path', () => {
    expect(get(object, 'a.b.c')).toBeUndefined();
  });

  it('returns default value for non-existent path when provided', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('handles null or undefined objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });


});