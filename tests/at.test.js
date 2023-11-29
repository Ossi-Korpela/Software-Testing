

import at from "../src/at.js"

// at.test.js
describe('at function', () => {

  test('should return an array of values corresponding to paths of the object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const paths = ['a[0].b.c', 'a[1]'];
    const result = at(object, ...paths);
    expect(result).toEqual([3, 4]);
  });

  test('should handle object with non-existent paths', () => {
    const object = { 'x': { 'y': 5 } };
    const paths = ['a[0].b.c', 'x.z'];
    const result = at(object, ...paths);
    expect(result).toEqual([undefined, undefined]);
  });

  test('should handle object with duplicate paths', () => {
    const object = { 'p': { 'q': 1, 'r': 2 } };
    const paths = ['p.q', 'p.r', 'p.q'];
    const result = at(object, ...paths);
    expect(result).toEqual([1, 2, 1]);
  });

   test('should return an array of values corresponding to paths of the object', () => {
    const object = {};
    const paths = [];
    const result = at(object, ...paths);
    expect(result).toEqual([]);
  });

  
  test('should handle object with non-existent paths', () => {
    const object = { 'a': [undefined, { 'b': { 'c': undefined } }] };
    const paths = ['a[0]', 'a[1].b.c'];
    const result = at(object, ...paths);
    expect(result).toEqual([undefined, undefined]);
  });
 
  test('should handle object with duplicate paths', () => {
    const object = { 'a': [null, { 'b': { 'c': 'hello' } }] };
    const paths = ['a[0]', 'a[1].b.c'];
    const result = at(object, ...paths);
    expect(result).toEqual([null, 'hello']);
  });

  test('should handle nonsensical path', () => {
    const object = { 'a': [1] };
    const paths = ['a[0]', 'orijoerjmer213123fsdfrferefreferf'];
    const result = at(object, ...paths);
    expect(result).toEqual([1, undefined]);
  });

  
 
});