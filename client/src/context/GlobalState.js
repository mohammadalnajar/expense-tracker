import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions:
  // get all transactions
  async function getAllTransactions() {
    try {
      const res = await fetch('/api/v1/transactions');
      const response = await res.json();

      dispatch({
        type: 'GET_ALL_TRANSACTIONS',
        payload: response.data,
      });
    } catch (err) {}
  }
  // del action

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getAllTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
