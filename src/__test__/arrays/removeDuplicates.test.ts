import { removeDuplicates } from 'src/arrays/removeDuplicates';
import { test, expect } from 'vitest';

test('removeDuplicates', () => {
  const nums = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5];

  const result = removeDuplicates(nums);
  expect(result).toBe(5);
});
