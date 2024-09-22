import { describe, test, beforeEach, expect } from 'vitest';

import { BrowserHistory } from 'src/linkedLists/designBrowserHistory';

describe('BrowserHistory', () => {
  let browserHistory: BrowserHistory;

  beforeEach(() => {
    browserHistory = new BrowserHistory('leetcode.com');
  });

  test('should initialize the browser history with the homepage', () => {
    expect(browserHistory).toBeDefined();
  });

  test('should visit new url', () => {
    browserHistory.visit('google.com');
    expect(browserHistory.back(1)).toBe('leetcode.com');
    expect(browserHistory.forward(1)).toBe('google.com');
  });

  test('should clear forward history when visiting new url', () => {
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');

    browserHistory.visit('linkedin.com');
    expect(browserHistory.forward(2)).toBe('linkedin.com');
  });

  test('should move back in history', () => {
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');
    expect(browserHistory.back(1)).toBe('google.com');
  });

  test('should move forward in history', () => {
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');
    expect(browserHistory.back(1)).toBe('google.com');
    expect(browserHistory.forward(1)).toBe('facebook.com');
  });

  test('should return current url after moving back in history at most steps', () => {
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');
    expect(browserHistory.back(1)).toBe('google.com');
    expect(browserHistory.back(1)).toBe('leetcode.com');
  });

  test('should return current url after moving forward in history at most steps', () => {
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');
    expect(browserHistory.back(1)).toBe('google.com');
    expect(browserHistory.forward(1)).toBe('facebook.com');
    expect(browserHistory.forward(1)).toBe('youtube.com');
  });
});
