import { Constants } from '@helpers/Constants';
import { ConvertMovieApiResponseToMovie } from '@helpers/converts';
import { MovieApiResponse } from '@interfaces/Movie';
import { createRandomMovieApiResponse } from '@mocks/data';

const generateMovieApiResponse = (
  backdropPath: string | undefined = undefined,
): MovieApiResponse => {
  const movieApiResponseMock: MovieApiResponse = createRandomMovieApiResponse();
  movieApiResponseMock.backdrop_path = backdropPath;

  return movieApiResponseMock;
};

describe('MovieConverter', () => {
  describe('ConvertMovieApiResponseToMovie', () => {
    test('Without url image', () => {
      const movieApiResponseMock: MovieApiResponse = generateMovieApiResponse();

      const movieResult = ConvertMovieApiResponseToMovie(movieApiResponseMock);

      expect(movieResult).toBeTruthy();
      expect(movieResult.originalLanguage).toBe(
        movieApiResponseMock.original_language.toUpperCase(),
      );
      expect(movieResult.backdropPath).toBeFalsy();
    });

    test('With url image', () => {
      const movieApiResponseMock: MovieApiResponse = generateMovieApiResponse('url-image');

      const movieResult = ConvertMovieApiResponseToMovie(movieApiResponseMock);

      expect(movieResult).toBeTruthy();
      expect(movieResult.originalLanguage).toBe(
        movieApiResponseMock.original_language.toUpperCase(),
      );
      expect(movieResult.backdropPath).toBe(
        `${Constants.MovieApi.IMAGE_URL}/w${500}${movieApiResponseMock.backdrop_path}`,
      );
    });
  });
});
