export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      console.log([...state.transactions, action.payload]);
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
