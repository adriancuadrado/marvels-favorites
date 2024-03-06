import CharactersContext from '@/state/characters/Context';
import CharactersProvider from '@/state/characters/Provider';
import { fireEvent, render } from '@testing-library/react';
import { useContext } from 'react';

describe('CharactersProvider Component', () => {
  test('provides characters state and setCharacters function', () => {
    const TestComponent = () => {
      const { characters, setCharacters } = useContext(CharactersContext);
      return (
        <div>
          <span data-testid='characters'>{characters}</span>
          <button
            data-testid='button'
            onClick={() => setCharacters('New Characters')}
          />
        </div>
      );
    };

    const { getByTestId } = render(
      <CharactersProvider initialState='Initial Characters'>
        <TestComponent />
      </CharactersProvider>
    );

    const charactersElement = getByTestId('characters');
    expect(charactersElement.textContent).toBe('Initial Characters');

    const buttonElement = getByTestId('button');
    fireEvent.click(buttonElement);

    expect(charactersElement.textContent).toBe('New Characters');
  });

  test('uses Context API', () => {
    const MockComponent = () => {
      const contextValue = useContext(CharactersContext);
      return (
        <span data-testid='context-value'>{JSON.stringify(contextValue)}</span>
      );
    };

    const { getByTestId } = render(
      <CharactersProvider initialState='Test State'>
        <MockComponent />
      </CharactersProvider>
    );

    const contextValueElement = getByTestId('context-value');
    expect(contextValueElement.textContent).toBe('{"characters":"Test State"}');
  });
});
