import { render, screen } from '@testing-library/react';
import { Stopwatch } from '../../../components/common/Stopwatch';

describe('Stopwatch', () => {
  test('formats time correctly', () => {
    render(<Stopwatch time={65} isFinished={false} />);
    expect(screen.getByText('1:05')).toBeInTheDocument();
  });

  test('shows green text when finished', () => {
    const { container } = render(<Stopwatch time={65} isFinished={true} />);
    expect(container.firstChild).toHaveClass('text-green-600');
  });
});
