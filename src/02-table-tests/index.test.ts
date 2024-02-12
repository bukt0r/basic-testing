import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
       
    { a: 2, b: 1, action: Action.Subtract, expected: 1 },
    { a: 5, b: 6, action: Action.Subtract, expected: -1 },
    { a: 8, b: 3, action: Action.Subtract, expected: 5 },

    { a: 8, b: 2, action: Action.Divide, expected: 4 },
    { a: 9, b: 3, action: Action.Divide, expected: 3 },
    { a: 11, b: 2, action: Action.Divide, expected: 5.5 },

    { a: 2, b: 3, action: Action.Multiply, expected: 6 },
    { a: -4, b: -3, action: Action.Multiply, expected: 12 },
    { a: 5, b: -2, action: Action.Multiply, expected: -10 },

    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
    { a: 4, b: 4, action: Action.Exponentiate, expected: 256 },
];

describe('simpleCalculator', () => {
  test.each(testCases)('evaluates %i %s %i to equal %i', ({a, b, action, expected}) => {
    expect(simpleCalculator({a, b, action})).toEqual(expected);
  });
});
