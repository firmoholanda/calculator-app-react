import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);

  let numTwo;
  if (!numberTwo) { numTwo = numberTwo; } else { numTwo = Big(numberTwo); }

  let total;
  switch (operation) {
    case '+': total = numOne.plus(numTwo); break;
    case '-': total = numOne.minus(numTwo); break;
    case 'X': total = numOne.times(numTwo); break;
    case '÷': if (numTwo.eq(0)) { (total = '0'); } else { (total = numOne.div(numTwo)); } break;
    case '%': if (!numTwo) { (total = numOne.times(0.01)); } else { (total = (numOne.times(numTwo)).times(0.01)); } break;
    default: total = '0';
  }

  return total.toString();
};

export default operate;
