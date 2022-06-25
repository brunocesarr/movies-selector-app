import { LoginScreen } from '@screens/Login';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('LoginScreen', () => {
  describe('Render', () => {
    test('Default', () => {
      const { container, getByText } = render(<LoginScreen />);

      const movieLogoText = getByText(/Your personal movie selector app/i);

      expect(container).toBeTruthy();
      expect(movieLogoText).toBeTruthy();
    });
  });
});
