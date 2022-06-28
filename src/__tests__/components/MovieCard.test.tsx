import { MovieCard } from '@components/MovieCard';
import { Movie } from '@interfaces/Movie';
import { createRandomMovie } from '@mocks/data';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Colors } from 'react-native-paper';

const generateMovieInfoMock = (voteAverage = 0) => {
  const movieInfoMock: Movie = createRandomMovie();
  movieInfoMock.voteAverage = voteAverage;
  return movieInfoMock;
};

describe('MovieCard', () => {
  describe('Render', () => {
    test('With background color Red', () => {
      const movieInfoMock: Movie = generateMovieInfoMock();
      const { container, getByText } = render(<MovieCard movieInfo={movieInfoMock} />);

      const movieTitleText = getByText(movieInfoMock.title);
      const movieVoteAverageText = getByText(movieInfoMock.voteAverage.toString());

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.red500,
      });
    });

    test('With background color Yellow', () => {
      const movieInfoMock: Movie = generateMovieInfoMock(6);
      const { container, getByText } = render(<MovieCard movieInfo={movieInfoMock} />);

      const movieTitleText = getByText(movieInfoMock.title);

      const movieVoteAverageText = getByText(movieInfoMock.voteAverage.toString());

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.yellow500,
      });
    });

    test('With background color Green', () => {
      const movieInfoMock: Movie = generateMovieInfoMock(8);
      const { container, getByText } = render(<MovieCard movieInfo={movieInfoMock} />);

      const movieTitleText = getByText(movieInfoMock.title);

      const movieVoteAverageText = getByText(movieInfoMock.voteAverage.toString());

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.green500,
      });
    });
  });
});
