import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default Calculator;
