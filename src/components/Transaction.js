import React from 'react';

export const Transaction = ({ trans }) => {
  return (
    <li key={trans.id} className={trans.amount > 0 ? 'plus' : 'minus'}>
      {trans.text} <span>{trans.amount}</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};
