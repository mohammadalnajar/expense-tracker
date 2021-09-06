export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'GET_ALL_TRANSACTIONS':
      return {
        transactions: action.payload,
      };
    default:
      return state;
  }
};
