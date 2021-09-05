import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li key={trans._id} className={trans.amount > 0 ? 'plus' : 'minus'}>
      {trans.text} <span>{trans.amount}</span>
      <button
        onClick={() => deleteTransaction(trans._id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};
