import reducer from '@/state/characters/reducer';

describe('Reducer', () => {
  test('returns the initial state', () => {
    const initialState = {};
    const action = { type: 'UNKNOWN_ACTION' };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test('sets the state correctly', () => {
    const initialState = {};
    const action = {
      type: 'SET',
      payload: { key: 'value' },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(action.payload);
  });
});
