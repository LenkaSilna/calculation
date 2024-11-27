import * as React from 'react';
import { Timer } from 'lucide-react';
import { formatTime } from '../../utils/formatTime';
import type { StopwatchProps } from '../../types';

export const Stopwatch: React.FC<StopwatchProps> = ({ time, isFinished }) => {
  return (
    <div
      className={`flex items-center gap-2 text-lg ${isFinished ? 'font-bold text-green-600' : ''}`}
    >
      <Timer className="h-5 w-5" />
      <span>{formatTime(time)}</span>
    </div>
  );
};
