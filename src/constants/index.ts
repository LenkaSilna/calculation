export const MIN_CALCULATIONS = 20;
export const MAX_CALCULATIONS = 60;
export const DEFAULT_CALCULATIONS = 20;

export const OPERATORS = ['+', '-', '*'] as const;

export const NUMBER_RANGE = {
  min: 1,
  max: 10,
} as const;

export const GAME_STATES = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
} as const;

export const RESULT_MESSAGES = {
  CORRECT: 'Správně!',
  INCORRECT: 'Zkus to znovu!',
  FINISHED: 'Výborně, dokončeno!',
} as const;
