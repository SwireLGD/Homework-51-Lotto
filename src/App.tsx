import React, { useState } from 'react';
import Lotto from './Lotto';

const App: React.FC = () => {
  const createNewNum = (): number[] => {
    const newNum: number[] = [];
    while (newNum.length < 5) {
      const randomNumber = Math.floor(Math.random() * 32) + 5;
      if (!newNum.includes(randomNumber)) {
        newNum.push(randomNumber);
      }
    }
    return newNum.sort((a, b) => a - b);
  };

  const [numbers, setNumbers] = useState<number[]>(createNewNum());

  const handleNewNumbers = () => {
    setNumbers(createNewNum());
  };

  return (
    <div className='ContentBox'>
      <button className='LottoBtn' onClick={handleNewNumbers}>New numbers</button>
      <div className='LottoNumbers'>
        {numbers.map((number, index) => (
          <Lotto key={index} value={number} />
        ))}
      </div>
    </div>
  );
};

export default App;
