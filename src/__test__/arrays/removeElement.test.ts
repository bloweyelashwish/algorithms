import { removeElement } from 'src/arrays/removeElement';
import { test, expect } from 'vitest';

test('removeElement', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;

  const k = removeElement(nums, val);
  expect(k).toBe(5);
});
