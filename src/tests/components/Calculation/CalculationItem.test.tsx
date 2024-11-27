import { render, screen, fireEvent } from '@testing-library/react';
import { CalculationItem } from '../../../components/calculation/CalculationItem';
import { CardProps, CardContentProps, TextFieldProps, TypographyProps } from '@mui/material';

interface MockTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
}

jest.mock('@mui/material', () => ({
  Card: ({ children, className }: CardProps) => <div className={className}>{children}</div>,
  CardContent: ({ children }: CardContentProps) => <div>{children}</div>,
  TextField: ({
    onChange,
    onKeyDown,
    value,
    disabled = false,
    type = 'number',
    className = '',
  }: MockTextFieldProps) => (
    <input
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      disabled={disabled}
      className={className}
    />
  ),
  Typography: ({ children, className }: TypographyProps) => (
    <span className={className}>{children}</span>
  ),
}));

describe('CalculationItem', () => {
  const mockCalculation = {
    id: '1',
    n: 5,
    m: 3,
    operator: '+' as const,
    result: 8,
    isSubmitted: false,
    isCorrect: false,
  };

  test('renders calculation correctly', () => {
    render(<CalculationItem calculation={mockCalculation} onSubmit={() => {}} />);
    expect(screen.getByText('5 + 3 =')).toBeDefined();
  });

  test('handles input changes', () => {
    render(<CalculationItem calculation={mockCalculation} onSubmit={() => {}} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '8' } });
    expect(input).toHaveValue(8);
  });

  test('calls onSubmit when Enter is pressed', () => {
    const onSubmit = jest.fn();
    render(<CalculationItem calculation={mockCalculation} onSubmit={onSubmit} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '8' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onSubmit).toHaveBeenCalledWith('1', 8);
  });
});
