
// Reducer function used in the useReducer() hook
const reducer = (state, action) => {
  switch (action.type) {
    case 'uppercase':
      return { message: state.message.toUpperCase() };
    case 'lowercase':
      return { message: state.message.toLowerCase() };
    case 'reverse':
      return { message: state.message.split('').reverse().join('') };
    default:
      return state.message;
  }
};

export default reducer;