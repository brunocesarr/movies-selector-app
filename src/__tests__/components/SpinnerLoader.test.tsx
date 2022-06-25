import { SpinnerLoader } from '@components/SpinnerLoader';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('SpinnerLoader', () => {
  describe('Render', () => {
    test('Default', () => {
      const { container, getByText } = render(<SpinnerLoader />);

      const loadingText = getByText(/Loading.../i);

      expect(container).toBeTruthy();
      expect(loadingText).toBeTruthy();
    });
  });
});
