import { shuffle } from 'src/arrays/shuffleTheArray';
import { test, expect } from 'vitest';

test('shuffleTheArray', () => {
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;

  const result = shuffle(nums, n);

  expect(result).toEqual([2, 3, 5, 4, 1, 7]);
});
