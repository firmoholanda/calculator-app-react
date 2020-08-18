import React from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

function Calculator() {
  return (
    <div className="calculator w-50 h-50 mt-4 mx-auto shadow bg-white rounded">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default Calculator;
