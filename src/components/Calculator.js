import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setState(Calculate(state, buttonName));
  };

  return (
    <div className="calculator">
      <Display result={state.next || state.total || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default Calculator;
