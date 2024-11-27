import * as React from 'react';
import { CalculationItem } from './CalculationItem';
import type { CalculationGridProps } from '../../types';

export const CalculationGrid: React.FC<CalculationGridProps> = ({ calculations, onSubmit }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {calculations.map((calculation) => (
        <CalculationItem key={calculation.id} calculation={calculation} onSubmit={onSubmit} />
      ))}
    </div>
  );
};
