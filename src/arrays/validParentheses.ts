/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
*/

export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const dict: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack: string[] = [];

  for (let p of s) {
    if (dict[p]) {
      if (stack.pop() !== dict[p]) {
        return false;
      }
    } else {
      stack.push(p);
    }
  }

  return stack.length === 0;
}
