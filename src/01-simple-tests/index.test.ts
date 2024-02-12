// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({a: 3, b: 2, action: Action.Add})).toBe(5)
    expect(simpleCalculator({a: 5, b: 3, action: Action.Add})).toBe(8);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({a: 5, b: 3, action: Action.Subtract})).toBe(2);
    expect(simpleCalculator({a: 10, b: 9, action: Action.Subtract})).toBe(1);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({a: 5, b: 3, action: Action.Multiply})).toBe(15);
    expect(simpleCalculator({a: 8, b: 4, action: Action.Multiply})).toBe(32);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({a: 8, b: 2, action: Action.Divide})).toBe(4);
    expect(simpleCalculator({a: 5, b: 2, action: Action.Divide})).toBe(2.5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({a: 4, b: 2, action: Action.Exponentiate})).toBe(16);
    expect(simpleCalculator({a: 5, b: 3, action: Action.Exponentiate})).toBe(125);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({a: 5, b: 3, action: ''})).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({a: ' ', b: true, action: 2})).toBe(null);
  });
});
