const {
  formatCharactersResponse,
  formatComicsResponse,
} = require('@/utils/formatters');

describe('formatCharactersResponse', () => {
  test('correctly formats response data for characters', () => {
    // Mock response data
    const response = {
      data: {
        results: [
          {
            id: 1,
            name: 'Character 1',
            description: 'Description 1',
            thumbnail: { path: '/path/to/image', extension: 'jpg' },
          },
          {
            id: 2,
            name: 'Character 2',
            description: 'Description 2',
            thumbnail: { path: '/path/to/image', extension: 'jpg' },
          },
        ],
      },
    };

    // Expected formatted data
    const expectedFormattedData = {
      1: {
        name: 'Character 1',
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        description: 'Description 1',
      },
      2: {
        name: 'Character 2',
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        description: 'Description 2',
      },
    };

    // Call the function
    const formattedData = formatCharactersResponse(response);

    // Compare the formatted data with expected data
    expect(formattedData).toEqual(expectedFormattedData);
  });
});

describe('formatComicsResponse', () => {
  test('correctly formats response data for comics', () => {
    // Mock response data
    const response = {
      data: {
        results: [
          {
            id: 1,
            title: 'Comic 1',
            modified: '2023-03-05T10:00:00Z',
            thumbnail: { path: '/path/to/image', extension: 'jpg' },
          },
          {
            id: 2,
            title: 'Comic 2',
            modified: '2021-07-15T15:30:00Z',
            thumbnail: { path: '/path/to/image', extension: 'jpg' },
          },
        ],
      },
    };

    // Expected formatted data
    const expectedFormattedData = {
      1: {
        title: 'Comic 1',
        year: 2023,
        image: '/path/to/image/portrait_xlarge.jpg',
      },
      2: {
        title: 'Comic 2',
        year: 2021,
        image: '/path/to/image/portrait_xlarge.jpg',
      },
    };

    // Call the function
    const formattedData = formatComicsResponse(response);

    // Compare the formatted data with expected data
    expect(formattedData).toEqual(expectedFormattedData);
  });
});
