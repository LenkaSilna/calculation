import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../../pages/Home';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Home', () => {
  test('renders title', () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Matematický trénink/i)).toBeInTheDocument();
  });

  test('validates input range', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const input = screen.getByRole('spinbutton');

    fireEvent.change(input, { target: { value: '10' } });
    expect(screen.getByRole('button')).toBeDisabled();

    fireEvent.change(input, { target: { value: '30' } });
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
