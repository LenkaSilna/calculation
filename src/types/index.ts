export type Operator = '+' | '-' | '*';

export interface Calculation {
  id: string;
  n: number;
  m: number;
  operator: Operator;
  result: number;
  userAnswer?: number;
  isCorrect?: boolean;
  isSubmitted: boolean;
}

export interface CalculationSettings {
  numberOfCalculations: number;
  includeAddition: boolean;
  includeSubtraction: boolean;
  includeMultiplication: boolean;
}

export interface GameState {
  isRunning: boolean;
  isFinished: boolean;
  totalCalculations: number;
  completedCalculations: number;
  startTime?: Date;
  endTime?: Date;
}

export interface StopwatchProps {
  time: number;
  isFinished: boolean;
}

export interface ProgressBarProps {
  completed: number;
  total: number;
}

export interface CalculationItemProps {
  calculation: Calculation;
  onSubmit: (id: string, answer: number) => void;
}

export interface CalculationGridProps {
  calculations: Calculation[];
  onSubmit: (id: string, answer: number) => void;
}
