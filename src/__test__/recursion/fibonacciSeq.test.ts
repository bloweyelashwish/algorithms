import { expect, it, describe } from "vitest";

import { fib } from "../../recursion/fibonacciSeq";

describe('fibonacciSeq', () => {
  it('should return 0 for 0', () => {
    expect(fib(0)).toBe(0);
  })

  it('should return 1 for 1', () => {
    expect(fib(1)).toBe(1);
  });

  it('should return 12586269025 for 50', () => {
    expect(fib(50)).toBe(12586269025);
  });
})