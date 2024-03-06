import { getCharacters, getCharacter, getCharacterComics } from '@/api';
import * as formatters from '@/utils/formatters';

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { results: [] } }),
  })
);

// Mocking formatCharactersResponse and formatComicsResponse functions
jest.mock('@/utils/formatters', () => ({
  formatCharactersResponse: jest.fn(),
  formatComicsResponse: jest.fn(),
}));

describe('getCharacters', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacters('Iron Man', { otherParam: 'value' });

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENDPOINT}characters?apikey=${process.env.NEXT_PUBLIC_KEY}&limit=50&nameStartsWith=Iron+Man&otherParam=value`
    );
  });

  test('calls formatCharactersResponse with response data', async () => {
    await getCharacters();

    expect(formatters.formatCharactersResponse).toHaveBeenCalled();
  });
});

describe('getCharacter', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacter(123, { otherParam: 'value' });

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENDPOINT}characters/123?apikey=${process.env.NEXT_PUBLIC_KEY}&otherParam=value`
    );
  });

  test('calls formatCharactersResponse with response data', async () => {
    await getCharacter();

    expect(formatters.formatCharactersResponse).toHaveBeenCalled();
  });
});

describe('getCharacterComics', () => {
  test('calls fetch with correct URL and parameters', async () => {
    await getCharacterComics(123, { otherParam: 'value' });

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_ENDPOINT}characters/123/comics?apikey=${process.env.NEXT_PUBLIC_KEY}&limit=20&otherParam=value`
    );
  });

  test('calls formatComicsResponse with response data', async () => {
    await getCharacterComics();

    expect(formatters.formatComicsResponse).toHaveBeenCalled();
  });
});
