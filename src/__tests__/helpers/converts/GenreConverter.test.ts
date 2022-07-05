import { ConvertGenreApiResponseToGenre } from '@helpers/converts';
import { GenreApiResponse } from '@interfaces/Genre';
import { genresApiResponseMock } from '@mocks/data';

const generateGenreApiResponse = (): GenreApiResponse => genresApiResponseMock[0];

describe('GenreConverter', () => {
  describe('ConvertGenreApiResponseToGenre', () => {
    test('Default Object', () => {
      const genreApiResponseMock: GenreApiResponse = generateGenreApiResponse();

      const genreResult = ConvertGenreApiResponseToGenre(genreApiResponseMock);

      expect(genreResult).toBeTruthy();
      expect(genreResult.id).toBe(genreApiResponseMock.id);
      expect(genreResult.name).toBe(genreApiResponseMock.name);
    });
  });
});
