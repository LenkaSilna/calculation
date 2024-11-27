import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Calculations } from '../../pages/Calculations';
import { useStopwatch } from '../../hooks/useStopwatch';
import { useCalculations } from '../../hooks/useCalculations';
import { Calculation } from '../../types';

const mockUseStopwatch = useStopwatch as jest.MockedFunction<typeof useStopwatch>;
const mockUseCalculations = useCalculations as jest.MockedFunction<typeof useCalculations>;

jest.mock('../../hooks/useStopwatch', () => ({
  useStopwatch: jest.fn(),
}));

jest.mock('../../hooks/useCalculations', () => ({
  useCalculations: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: { numCalculations: 20 },
  }),
  useNavigate: () => jest.fn(),
}));

describe('Calculations Page', () => {
  const mockCalculations: Calculation[] = [
    {
      id: '1',
      n: 5,
      m: 3,
      operator: '+',
      result: 8,
      isSubmitted: false,
    },
    {
      id: '2',
      n: 4,
      m: 2,
      operator: '*',
      result: 8,
      isSubmitted: true,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseStopwatch.mockImplementation(() => ({
      time: 0,
      isRunning: true,
      start: jest.fn(),
      stop: jest.fn(),
      reset: jest.fn(),
    }));

    mockUseCalculations.mockImplementation(() => ({
      calculations: mockCalculations,
      currentIndex: 1,
      submitAnswer: jest.fn(),
      isCompleted: false,
    }));
  });

  test('renders with initial state', () => {
    render(
      <BrowserRouter>
        <Calculations />
      </BrowserRouter>
    );

    const progressText = screen.getByText(/Dokončeno: 1\/20/i);
    expect(progressText).toBeDefined();

    const calculation = screen.getByText('5 + 3 =');
    expect(calculation).toBeDefined();
  });

  test('starts timer on mount', () => {
    const mockStart = jest.fn();
    mockUseStopwatch.mockImplementation(() => ({
      time: 0,
      isRunning: true,
      start: mockStart,
      stop: jest.fn(),
      reset: jest.fn(),
    }));

    render(
      <BrowserRouter>
        <Calculations />
      </BrowserRouter>
    );

    expect(mockStart).toHaveBeenCalled();
  });

  test('shows completed state', () => {
    const mockStop = jest.fn();
    mockUseStopwatch.mockImplementation(() => ({
      time: 10,
      isRunning: false,
      start: jest.fn(),
      stop: mockStop,
      reset: jest.fn(),
    }));

    mockUseCalculations.mockImplementation(() => ({
      calculations: [
        {
          id: '1',
          n: 5,
          m: 3,
          operator: '+',
          result: 8,
          isSubmitted: true,
        },
      ],
      currentIndex: 1,
      submitAnswer: jest.fn(),
      isCompleted: true,
    }));

    render(
      <BrowserRouter>
        <Calculations />
      </BrowserRouter>
    );

    expect(mockStop).toHaveBeenCalled();
  });
});
