import React from 'react';

type Props = {
  value: number;
};

const Lotto: React.FC<Props> = ({ value }) => {
  return (
    <div className='LottoNumber'>
      {value}
    </div>
  );
};

export default Lotto;