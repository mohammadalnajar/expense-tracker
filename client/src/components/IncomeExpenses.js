import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const expenses = Math.abs(
    transactions
      .filter((trans) => trans.amount < 0)
      .map((trans) => trans.amount)
      .reduce((acc, curr) => acc + curr, 0)
  );
  const income = Math.abs(
    transactions
      .filter((trans) => trans.amount > 0)
      .map((trans) => trans.amount)
      .reduce((acc, curr) => acc + curr, 0)
  );
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          -${expenses.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
