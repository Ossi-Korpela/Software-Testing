import isEmpty from "../src/isEmpty";

describe('isEmpty function', () => {

  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for primitive types', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(Symbol())).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns false for non-empty object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  it('returns true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('returns false for a non-empty Map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  it('returns true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('returns false for a non-empty Set', () => {
    const set = new Set();
    set.add('value');
    expect(isEmpty(set)).toBe(false);
  });

  it('returns true for an empty Buffer', () => {
    // Assuming Node.js environment for Buffer
    expect(isEmpty(Buffer.from([]))).toBe(true);
  });

  it('returns false for a non-empty Buffer', () => {
    expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
  });

  it('returns true for an empty typed array', () => {
    expect(isEmpty(new Uint8Array())).toBe(true);
  });

  it('returns false for a non-empty typed array', () => {
    expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
  });

  it('returns true for an empty arguments object', () => {
    (function() {
      expect(isEmpty(arguments)).toBe(true);
    })();
  });

  it('returns false for a non-empty arguments object', () => {
    (function() {
      expect(isEmpty(arguments)).toBe(false);
    })(1, 2, 3);
  });

});