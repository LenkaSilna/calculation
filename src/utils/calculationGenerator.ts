import { Calculation, Operator } from '../types';
import { OPERATORS, NUMBER_RANGE } from '../constants';
import { v4 as uuidv4 } from 'uuid';

const generateNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const calculateResult = (n: number, m: number, operator: Operator): number => {
  switch (operator) {
    case '+':
      return n + m;
    case '-':
      return n - m;
    case '*':
      return n * m;
    default:
      throw new Error('Invalid operator');
  }
};

export const generateCalculations = (count: number): Calculation[] => {
  return Array(count)
    .fill(null)
    .map(() => {
      const n = generateNumber(NUMBER_RANGE.min, NUMBER_RANGE.max);
      const m = generateNumber(NUMBER_RANGE.min, NUMBER_RANGE.max);
      const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)] as Operator;

      return {
        id: uuidv4(),
        n,
        m,
        operator,
        result: calculateResult(n, m, operator),
        isSubmitted: false,
      };
    });
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
