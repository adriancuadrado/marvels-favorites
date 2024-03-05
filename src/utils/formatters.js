const mapResultEntries = (response, mapper) =>
  Object.fromEntries(response.data.results.map(mapper));

export const formatCharactersResponse = (response) =>
  mapResultEntries(
    response,
    ({
      id,
      name,
      description,
      thumbnail: { path: imagePath, extension: imageExtension },
    }) => [
      id,
      {
        name,
        imagePath,
        imageExtension,
        description,
      },
    ]
  );

export const formatComicsResponse = (response) =>
  mapResultEntries(
    response,
    ({
      id,
      title,
      modified,
      thumbnail: { path: imagePath, extension: imageExtension },
    }) => [
      id,
      {
        title,
        year: new Date(modified).getUTCFullYear(),
        image: `${imagePath}/portrait_xlarge.${imageExtension}`,
      },
    ]
  );
