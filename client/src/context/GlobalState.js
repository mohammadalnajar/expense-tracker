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

  async function deleteTransaction(id) {
    try {
      const res = await fetch(`/api/v1/transactions/${id}`, {
        method: 'DELETE',
      });
      const response = await res.json();
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function addTransaction(text, amount) {
    try {
      const res = await fetch('/api/v1/transactions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ text, amount }),
      });
      const response = await res.json();
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
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
