import { MovieDetailScreen } from '@screens/Details';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('MovieDetailScreen', () => {
  describe('Render', () => {
    test('Default', () => {
      const { container, getByText } = render(<MovieDetailScreen />);

      const movieDetailText = getByText(/Movie Detail/i);

      expect(container).toBeTruthy();
      expect(movieDetailText).toBeTruthy();
    });
  });
});
