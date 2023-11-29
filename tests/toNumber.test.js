
import toNumber from "../src/toNumber"


describe('toNumber function', () => {

  it('converts number string to number', () => {
    expect(toNumber('123')).toBe(123);
  });

  it('converts floating point number string to number', () => {
    expect(toNumber('123.45')).toBe(123.45);
  });

 


  // Testing with Symbol Types
  it('converts symbols to NaN', () => {
    expect(toNumber(Symbol('test'))).toBeNaN();
  });

  // Testing with Object Types
  it('converts objects using valueOf method', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });

  it('converts objects without valueOf to NaN', () => {
    const obj = {};
    expect(toNumber(obj)).toBeNaN();
  });

  // Testing with Strings
  it('converts trailing point to number', () => {
    expect(toNumber('123.')).toBe(123);
  });

  it('trims and converts strings with whitespace', () => {
    expect(toNumber(' 123 ')).toBe(123);
  });

  it('converts binary string values correctly', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  it('converts octal string values correctly', () => {
    expect(toNumber('0o17')).toBe(15);
  });

  it('returns NaN for bad hexadecimal strings', () => {
    expect(toNumber('-0x2a')).toBeNaN();
  });

  it('returns NaN for non-numeric strings', () => {
    expect(toNumber('abc')).toBeNaN();
  });

  // Testing with Special Numeric Values
  it('handles Infinity correctly', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  it('handles Number.MIN_VALUE correctly', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it('handles NaN correctly', () => {
    expect(toNumber(NaN)).toBeNaN();
  });

  // Testing with Boolean Values
  it('converts true to 1', () => {
    expect(toNumber(true)).toBe(1);
  });

  it('converts false to 0', () => {
    expect(toNumber(false)).toBe(0);
  });

  // Testing with null and undefined as they are undocumented
  it('converts null to NaN', () => {
    expect(toNumber(null)).toBeNaN();
  });

  it('converts undefined to NaN', () => {
    expect(toNumber(undefined)).toBeNaN();
  });

  // Edge Cases
  it('handles string number bigger max value', () => {
     expect(toNumber("999999999999999999999567767657659999999999999999999999956799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
    )).toBe(Infinity)
  });

  it('converts empty string to 0', () => {
    expect(toNumber('')).toBe(0);
  });

  it('returns NaN for invalid number formats', () => {
    expect(toNumber('abc123')).toBeNaN();
  });

  it('returns NaN for arrays', () => {
    expect(toNumber([1, 2, 3])).toBeNaN();
  });

  it('returns NaN for functions', () => {
    expect(toNumber(() => {})).toBeNaN();
  });

});