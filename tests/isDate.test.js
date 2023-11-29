import isDate from "../src/isDate"

describe('isDate function', () => {

  it('returns true for a valid Date object', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('returns false for an invalid Date object', () => {
    expect(isDate(new Date('invalid date'))).toBe(false);
  });

  it('returns false for non-date types', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });

  it('returns false for date-like objects', () => {
    const dateLike = {toString: () => '[object Date]'};
    expect(isDate(dateLike)).toBe(false);
  });


});