import { describe, test, expect } from 'vitest';

import { isValid } from './validParentheses';

describe('validParentheses', () => {
  test('Returns true for valid single set of parentheses', () => {
    const s = '()';
    expect(isValid(s)).toBe(true);
  });

  test('Returns true for multiple valid sets of parentheses', () => {
    const s = '()[]{}';
    expect(isValid(s)).toBe(true);
  });

  test('Returns false for invalid parentheses', () => {
    const s = '(]';
    expect(isValid(s)).toBe(false);
  });

  test('Returns true for valid nested parentheses', () => {
    const s = '([])';
    expect(isValid(s)).toBe(true);
  });

  test('Returns false for invalid nested parentheses', () => {
    const s = '([)]';
    expect(isValid(s)).toBe(false);
  });

  test('Returns false for single starting opening parentheses', () => {
    const s = '(';
    expect(isValid(s)).toBe(false);
  });

  test('Returns false for single starting closing parentheses', () => {
    const s = ')';
    expect(isValid(s)).toBe(false);
  });

  test('Return false for multiple starting opening parentheses', () => {
    const s = '({';
    expect(isValid(s)).toBe(false);
  });

  test('Return false for multiple starting closing parentheses', () => {
    const s = ')}';
    expect(isValid(s)).toBe(false);
  });
});
