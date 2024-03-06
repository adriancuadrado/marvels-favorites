const reducer = (state = {}, { type, payload }) => {
  let newState = state;
  let updateLocalStorage = true;
  switch (type) {
    case 'LOAD':
      newState = payload;
      updateLocalStorage = false;
      break;
    case 'ADD':
      const { id, character } = payload;
      newState = { ...state, [id]: character };
      break;
    case 'REMOVE':
      const copy = { ...state };
      delete copy[payload];
      newState = copy;
      break;
    default:
      updateLocalStorage = false;
  }
  if (updateLocalStorage) {
    localStorage.setItem('favorites', JSON.stringify(newState));
  }
  return newState;
};

export default reducer;
