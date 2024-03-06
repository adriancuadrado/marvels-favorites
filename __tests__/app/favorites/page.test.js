import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { getCharacters } from '@/api';
import Page from '@/app/favorites/page';

// Mocking components and functions for testing
jest.mock('@/components/Search', () => ({ favoritesOnly }) => (
  <div
    data-testid='mocked-search'
    favoritesonly={favoritesOnly ? 'true' : 'false'}
  />
));
jest.mock('@/components/Results', () => ({ favoritesOnly }) => (
  <div
    data-testid='mocked-results'
    favoritesonly={favoritesOnly ? 'true' : 'false'}
  />
));
jest.mock('@/utils/getServerSideQueryParams', () =>
  jest.fn().mockReturnValue({})
);

// Mocking API function for testing
jest.mock('@/api', () => ({
  getCharacters: jest.fn().mockResolvedValue([]),
}));

describe('Page Component', () => {
  test('renders search and results components with favoritesOnly prop', async () => {
    const { getByTestId } = render(await Page());

    await waitFor(() => {
      const searchComponent = getByTestId('mocked-search');
      expect(searchComponent).toBeInTheDocument();
      expect(searchComponent).toHaveAttribute('favoritesOnly', 'true');

      const resultsComponent = getByTestId('mocked-results');
      expect(resultsComponent).toBeInTheDocument();
      expect(resultsComponent).toHaveAttribute('favoritesOnly', 'true');
    });
  });

  test('calls getCharacters with correct arguments', async () => {
    await render(await Page());

    expect(getCharacters).toHaveBeenCalledWith(undefined, {});
  });

  test('renders main component with correct class name', async () => {
    const { container } = render(await Page());

    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveClass('main');
  });

  test('renders title component with correct class name', async () => {
    const { getByText } = render(await Page());

    const titleElement = getByText('FAVORITES');
    expect(titleElement).toHaveClass('title');
  });
});
