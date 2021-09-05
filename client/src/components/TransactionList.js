import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions, getAllTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((trans) => (
          <Transaction key={trans._id} trans={trans} />
        ))}
      </ul>
    </>
  );
};
