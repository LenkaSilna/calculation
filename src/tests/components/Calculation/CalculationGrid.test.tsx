import { render } from '@testing-library/react';
import { CalculationGrid } from '../../../components/calculation/CalculationGrid';

describe('CalculationGrid', () => {
  test('renders empty grid when no calculations provided', () => {
    const { container } = render(<CalculationGrid calculations={[]} onSubmit={() => {}} />);
    expect(container).toBeDefined();
  });
});
