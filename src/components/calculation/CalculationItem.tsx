import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, TextField, Typography } from '@mui/material';
import type { CalculationItemProps } from '../../types';

export const CalculationItem: React.FC<CalculationItemProps> = ({ calculation, onSubmit }) => {
  const [answer, setAnswer] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !calculation.isSubmitted && answer) {
      onSubmit(calculation.id, parseInt(answer, 10));
    }
  };

  return (
    <Card
      className={` ${calculation.isSubmitted && calculation.isCorrect ? 'bg-green-50' : ''} ${calculation.isSubmitted && !calculation.isCorrect ? 'bg-red-50' : ''} `}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <Typography variant="h6" className="font-bold">
            {calculation.n} {calculation.operator} {calculation.m} =
          </Typography>
        </div>
        <TextField
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={calculation.isSubmitted}
          fullWidth
          variant="outlined"
          size="small"
          className="mt-2"
        />
      </CardContent>
    </Card>
  );
};
