import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trans.amount > 0 ? '+' : '-';
  return (
    <li key={trans._id} className={trans.amount > 0 ? 'plus' : 'minus'}>
      {trans.text}{' '}
      <span>
        {sign}${numberWithCommas(Math.abs(trans.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(trans._id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};
