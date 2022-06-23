import { render } from '@testing-library/react-native';
import React from 'react';

import { MovieDetailScreen } from '../../screens';

describe("MovieDetailScreen", () => {
  describe("Render", () => {
    test("Not found movie", () => {
      const { container, findByText } = render(<MovieDetailScreen />);

      const movieDetailText = findByText(/Not Found/i);

      expect(container).toBeTruthy();
      expect(movieDetailText).toBeTruthy();
    });
  });
});
