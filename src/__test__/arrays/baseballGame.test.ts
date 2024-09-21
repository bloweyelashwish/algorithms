import { calPoints } from 'src/arrays/baseballGame';
import { describe, test, expect } from 'vitest';

describe('baseballGame', () => {
  test('Record with multiple operations', () => {
    const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
    const result = calPoints(ops);
    expect(result).toBe(27);
  });

  test('Record with one operation', () => {
    const ops = ['1', 'C'];
    const result = calPoints(ops);
    expect(result).toBe(0);
  });
});
