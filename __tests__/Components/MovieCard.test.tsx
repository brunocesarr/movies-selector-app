import { MovieCard } from "@components/MovieCard";
import { Movie } from "@interfaces/Movie";
import { createRandomMovie } from "@mocks/";
import { render } from "@testing-library/react-native";
import React from "react";
import { Colors } from "react-native-paper";

const generateMovieInfoMock = (voteAverage: number = 0) => {
  const movieInfoMock: Movie = createRandomMovie();
  movieInfoMock.voteAverage = voteAverage;
  return movieInfoMock;
};

describe("MovieCard", () => {
  describe("Render", () => {
    test("Render Movie Card with background color Red", () => {
      const movieInfoMock: Movie = generateMovieInfoMock();
      const { container, getByText } = render(
        <MovieCard movieInfo={movieInfoMock} />
      );

      const movieTitleText = getByText(movieInfoMock.title);
      const movieVoteAverageText = getByText(
        movieInfoMock.voteAverage.toString()
      );

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.red500,
      });
    });

    test("Render Movie Card with background color Yellow", () => {
      const movieInfoMock: Movie = generateMovieInfoMock(6);
      const { container, getByText } = render(
        <MovieCard movieInfo={movieInfoMock} />
      );

      const movieTitleText = getByText(movieInfoMock.title);

      const movieVoteAverageText = getByText(
        movieInfoMock.voteAverage.toString()
      );

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.yellow500,
      });
    });

    test("Render Movie Card with background color Green", () => {
      const movieInfoMock: Movie = generateMovieInfoMock(8);
      const { container, getByText } = render(
        <MovieCard movieInfo={movieInfoMock} />
      );

      const movieTitleText = getByText(movieInfoMock.title);

      const movieVoteAverageText = getByText(
        movieInfoMock.voteAverage.toString()
      );

      expect(container).toBeTruthy();
      expect(movieTitleText).toBeTruthy();
      expect(movieVoteAverageText).toBeTruthy();
      expect(movieVoteAverageText).toHaveStyle({
        backgroundColor: Colors.green500,
      });
    });
  });
});
