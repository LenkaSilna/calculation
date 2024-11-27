import { formatTime } from '../../utils/formatTime';

describe('formatTime', () => {
  test('should format seconds to MM:SS', () => {
    expect(formatTime(0)).toBe('0:00');
    expect(formatTime(61)).toBe('1:01');
    expect(formatTime(3599)).toBe('59:59');
  });

  test('should pad single digit seconds with zero', () => {
    expect(formatTime(5)).toBe('0:05');
  });
});
