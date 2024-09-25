export function fib(n: number, cache?: Record<number, number>): number {
  const memo = cache || {};

  if (n <= 1) {
    return n;
  }

  if (!memo[n]) {
    memo[n] = fib(n - 1, cache) + fib(n - 2, memo);
  }

  return memo[n];
};