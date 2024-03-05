import {
  formatCharactersResponse,
  formatComicsResponse,
} from './utils/formatters';

const getData = async (path, queryParams = {}) => {
  let params = new URLSearchParams({
    apikey: process.env.NEXT_PUBLIC_KEY,
    ...queryParams,
  });

  return await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}${path}?${params}`)
    .then((e) => e.json())
    .catch((e) => console.error(e));
};

export const getCharacters = async (nameStartsWith, otherParams) => {
  const queryParams = {
    limit: 50,
  };
  if (typeof nameStartsWith == 'string' && nameStartsWith.length > 0) {
    queryParams.nameStartsWith = nameStartsWith;
  }
  return formatCharactersResponse(
    await getData('characters', { ...queryParams, ...otherParams })
  );
};

export const getCharacter = async (characterId, otherParams) =>
  formatCharactersResponse(
    await getData(`characters/${characterId}`, otherParams)
  );

export const getCharacterComics = async (characterId, otherParams) =>
  formatComicsResponse(
    await getData(`characters/${characterId}/comics`, {
      limit: 20,
      ...otherParams,
    })
  );
