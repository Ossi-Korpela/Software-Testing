import defaultToAny from '../src/defaultToAny';

describe('defaultToAny', () => {
  test('should return the first non-undefined default value', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
    expect(defaultToAny(undefined, undefined, 20)).toBe(20);
  })

  test('should return the first non-null default value', () => {
    expect(defaultToAny(null, 20)).toBe(20);
    expect(defaultToAny(null, null, 2)).toBe(2);
  });

  test('should return the first non-NaN default value', () => {
    expect(defaultToAny(NaN, 2, 20)).toBe(2);
    expect(defaultToAny(NaN, NaN, 20)).toBe(20);
  });

  test('should work with arbitrary combinations ', () => {    
    expect(defaultToAny(undefined, null, 20)).toBe(20);
    expect(defaultToAny(undefined, null, undefined)).toBeUndefined();
    expect(defaultToAny(NaN, undefined, 1, null)).toBe(1);
    expect(defaultToAny(null, undefined, NaN, "heeyy", undefined)).toBe("heeyy")
   });


  test('should return undefined if undefined', () => {
    expect(defaultToAny(undefined)).toBeUndefined();
  });

  test('should return value if no default values are provided', () => {
    expect(defaultToAny(42)).toBe(42);
  });

  test('should work with strings', () => {
    expect(defaultToAny("NaN", 1)).toBe("NaN")
    expect(defaultToAny("undefined", 1)).toBe("undefined")
  })

  
});