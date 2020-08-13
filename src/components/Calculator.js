import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';


function Calculator() {
  return (
    <div className="calculator pt-3 w-50 h-50 mx-auto">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default Calculator;
