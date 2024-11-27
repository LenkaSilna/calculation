import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { MIN_CALCULATIONS, MAX_CALCULATIONS, DEFAULT_CALCULATIONS } from '../constants';

export const Home: React.FC = () => {
  const [numCalculations, setNumCalculations] = useState(DEFAULT_CALCULATIONS);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/calculations', { state: { numCalculations } });
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <Card className="transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <Typography variant="h4" className="mb-6 font-bold text-gray-800">
            Matematický trénink
          </Typography>
          <div className="space-y-4">
            <Typography variant="body1" className="text-gray-600">
              Počet příkladů ({MIN_CALCULATIONS}-{MAX_CALCULATIONS}):
            </Typography>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  min: MIN_CALCULATIONS,
                  max: MAX_CALCULATIONS,
                },
                className: 'bg-white',
              }}
              value={numCalculations}
              onChange={(e) => setNumCalculations(Number(e.target.value))}
              fullWidth
              variant="outlined"
              className="mb-4"
            />
            <Button
              variant="contained"
              onClick={handleStart}
              fullWidth
              size="large"
              startIcon={<PlayArrow />}
              disabled={numCalculations < MIN_CALCULATIONS || numCalculations > MAX_CALCULATIONS}
              className="bg-blue-600 py-3 text-lg font-medium hover:bg-blue-700"
            >
              Start
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
