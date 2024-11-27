import { useState, useCallback } from 'react';
import type { Calculation } from '../types';
import { generateCalculations } from '../utils/calculationGenerator';

export const useCalculations = (numberOfCalculations: number) => {
  const [calculations, setCalculations] = useState<Calculation[]>(() =>
    generateCalculations(numberOfCalculations)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const submitAnswer = useCallback((id: string, answer: number) => {
    setCalculations((prev) =>
      prev.map((calc) =>
        calc.id === id
          ? {
              ...calc,
              userAnswer: answer,
              isCorrect: answer === calc.result,
              isSubmitted: true,
            }
          : calc
      )
    );
    setCurrentIndex((prev) => prev + 1);
  }, []);

  return {
    calculations,
    currentIndex,
    submitAnswer,
    isCompleted: currentIndex === calculations.length,
  };
};
