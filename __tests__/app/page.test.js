// Import the necessary dependencies
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '@/app/page';
import FavoritesProvider from '@/state/favorites/Provider';
import { getCharacters } from '@/api';

// Mock the getCharacters function
jest.mock('@/api', () => ({
  getCharacters: jest.fn(),
}));

describe('Page component', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    getCharacters.mockClear();
  });

  it('renders without crashing', async () => {
    // Mock the getCharacters function to resolve with charactersData
    getCharacters.mockResolvedValueOnce({});

    // Render the Page component wrapped with FavoritesProvider
    const { container } = render(
      <FavoritesProvider initialState={{}}>{await Page()}</FavoritesProvider>
    );

    // Assert that the component renders properly
    expect(container).toBeInTheDocument();
  });

  // You can add more tests for different scenarios if needed
});
