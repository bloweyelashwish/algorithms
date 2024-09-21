import { test, expect } from 'vitest';
import { getConcatenation } from './concatArray';

test('Concatenation of Array', () => {
  const nums = [1, 3, 2, 1];

  const result = getConcatenation(nums);
  expect(result).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
});
