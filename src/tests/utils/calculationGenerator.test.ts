import { generateCalculations } from '../../utils/calculationGenerator';

describe('generateCalculations', () => {
  test('should generate correct number of calculations', () => {
    const calculations = generateCalculations(20);
    expect(calculations).toHaveLength(20);
  });

  test('should generate valid calculations', () => {
    const calculations = generateCalculations(1);
    const calc = calculations[0];

    expect(calc.n).toBeGreaterThanOrEqual(1);
    expect(calc.n).toBeLessThanOrEqual(10);
    expect(calc.m).toBeGreaterThanOrEqual(1);
    expect(calc.m).toBeLessThanOrEqual(10);
    expect(['+', '-', '*']).toContain(calc.operator);
  });

  test('should calculate results correctly', () => {
    const calculations = generateCalculations(10);

    calculations.forEach((calc) => {
      let expectedResult;
      switch (calc.operator) {
        case '+':
          expectedResult = calc.n + calc.m;
          break;
        case '-':
          expectedResult = calc.n - calc.m;
          break;
        case '*':
          expectedResult = calc.n * calc.m;
          break;
      }
      expect(calc.result).toBe(expectedResult);
    });
  });
});
