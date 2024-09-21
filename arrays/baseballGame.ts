/*
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.

'+'.
Record a new score that is the sum of the previous two scores.

'D'.
Record a new score that is the double of the previous score.

'C'.
Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.
*/

const operate = {
  '+': (points: number[]) => {
    const last = points.at(-1);
    const secondLast = points.at(-2);
    if (last && secondLast) {
      points.push(last + secondLast);
    }
  },
  D: (points: number[]) => {
    const last = points.at(-1);
    if (last) {
      points.push(last * 2);
    }
  },
  C: (points: number[]) => {
    points.pop();
  },
};

export function calPoints(operations: string[]): number {
  const points = [];

  for (let op of operations) {
    if (Object.hasOwn(operate, op)) {
      operate[op as keyof typeof operate](points);
    } else {
      points.push(Number(op));
    }
  }

  if (points.length === 0) {
    return 0;
  }

  if (points.length === 1) {
    return points[0];
  }

  let result = 0;
  for (let point of points) {
    result += point;
  }

  return result;
}
