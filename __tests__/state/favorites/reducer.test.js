import reducer from '@/state/favorites/reducer';

describe('Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      1: { id: 1, name: 'Character 1' },
      2: { id: 2, name: 'Character 2' },
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should load characters', () => {
    const payload = {
      3: { id: 3, name: 'Character 3' },
      4: { id: 4, name: 'Character 4' },
    };
    const action = { type: 'LOAD', payload };
    expect(reducer(initialState, action)).toEqual(payload);
  });

  it('should add a character', () => {
    const newCharacter = { id: 3, name: 'Character 3' };
    const action = { type: 'ADD', payload: { id: 3, character: newCharacter } };
    const expectedState = {
      ...initialState,
      3: newCharacter,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should remove a character', () => {
    const action = { type: 'REMOVE', payload: 1 };
    const expectedState = {
      2: { id: 2, name: 'Character 2' },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle unknown action type', () => {
    const action = { type: 'UNKNOWN' };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
