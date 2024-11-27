import * as React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, LinearProgress, IconButton } from '@mui/material';
import { ArrowBack, Timer } from '@mui/icons-material';
import { CalculationGrid } from '../components/calculation/CalculationGrid';
import { useStopwatch } from '../hooks/useStopwatch';
import { useCalculations } from '../hooks/useCalculations';

export const Calculations: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const numCalculations = location.state?.numCalculations ?? 20;

  const { time, start, stop } = useStopwatch(false);
  const { calculations, submitAnswer, isCompleted } = useCalculations(numCalculations);

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    if (isCompleted) {
      stop();
    }
  }, [isCompleted, stop]);

  const completed = calculations.filter((calc) => calc.isSubmitted).length;
  const progress = (completed / numCalculations) * 100;

  const formattedTime = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <IconButton onClick={() => navigate('/')} className="hover:bg-gray-100">
          <ArrowBack className="text-gray-600" />
        </IconButton>

        <div
          className={`flex items-center gap-2 font-mono text-lg ${isCompleted ? 'font-bold text-green-600' : 'text-gray-700'} `}
        >
          <Timer className="h-5 w-5" />
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="body1" className="font-medium text-gray-600">
            Dokončeno: {completed}/{numCalculations}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            {progress.toFixed(0)}%
          </Typography>
        </div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="h-2 rounded-full"
          sx={{
            backgroundColor: 'rgb(229, 231, 235)', // bg-gray-200
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'rgb(37, 99, 235)', // bg-blue-600
            },
          }}
        />
      </div>

      <div className="rounded-xl bg-gray-50 p-4 md:p-6">
        <CalculationGrid calculations={calculations} onSubmit={submitAnswer} />
      </div>

      {isCompleted && (
        <div className="mt-6 text-center">
          <Typography variant="h5" className="mb-3 font-bold text-green-600">
            Výborně! Úloha dokončena
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            className="bg-green-600 hover:bg-green-700"
          >
            Zpět na hlavní stranu
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/calculations', { state: { numCalculations } })}
            className="ml-4 bg-blue-600 hover:bg-blue-700"
          >
            Znovu spustit
          </Button>
        </div>
      )}
    </div>
  );
};
