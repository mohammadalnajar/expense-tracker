import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>Add new transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('reached');
          addTransaction({ id: Math.floor(Math.random() * 100), text, amount });
        }}
      >
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type='text'
            value={text}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(+e.target.value)}
            type='number'
            value={amount}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
