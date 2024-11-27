import * as React from 'react';
import type { ProgressBarProps } from '../../types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
