import camelCase from "../src/camelCase"

describe('camelCase function', () => {

  it('converts standard strings to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  it('handles strings with dashes', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  it('handles strings with underscores', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  it('handles strings with dots', () => {
    expect(camelCase('.FOO.....BAR..')).toBe('fooBar');
  });

  it('converts mixed case strings', () => {
    expect(camelCase('fOo BaR')).toBe('fooBar');
  });

  it('handles empty string', () => {
    expect(camelCase('')).toBe('');
  });

  it('handles strings with only whitespace', () => {
    expect(camelCase('   ')).toBe('');
  });

  // Test with non-string inputs
  it('handles non-string inputs', () => {
    expect(camelCase(123)).toBe('123');
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });

  // Test with apostrophes and Unicode characters
  it('handles strings with apostrophes', () => {
    expect(camelCase("l'année")).toBe('lAnnée');
  });

  it('handles strings with unicode characters', () => {
    expect(camelCase('éléphant')).toBe('éléphant');
  });

});