import { jest } from '@jest/globals';
import { LoginScreen } from '@screens/Login';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('LoginScreen', () => {
  describe('Render', () => {
    test('Default', () => {
      const { container, getByText } = render(<LoginScreen />);

      const movieLogoText = getByText(/Your personal movie selector app/i);

      expect(container).toBeTruthy();
      expect(movieLogoText).toBeTruthy();
    });
  });

  describe('Login Action', () => {
    test('On click login button', async () => {
      const { container, getByText } = render(<LoginScreen />);

      const loginButton = getByText(/Enter/i);
      expect(container).toBeTruthy();
      expect(loginButton).toBeTruthy();

      fireEvent.press(loginButton);
      expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
