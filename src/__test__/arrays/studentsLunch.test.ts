import { describe, expect, test } from 'vitest';

import { countStudents } from 'src/arrays/studentsLunch';

describe('countStudents', () => {
  test('Returns 0 when all students are able to eat', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
  });

  test('Returns 3 when 3 students are unable to eat', () => {
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });
});
