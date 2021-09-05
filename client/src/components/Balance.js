import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((trans) => trans.amount)
    .reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total.toFixed(2)}</h1>
    </>
  );
};
