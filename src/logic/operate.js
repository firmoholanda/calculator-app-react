import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  
  let numTwo;
  (!numberTwo) ? (numTwo = numberTwo) : (numTwo = Big(numberTwo));

  let total;
  switch (operation) {
    case '+': total = numOne.plus(numTwo); break;
    case '-': total = numOne.minus(numTwo); break;
    case 'x': total = numOne.times(numTwo); break;
    case '÷': (numTwo.eq(0)) ? (total = '0') : (total = numOne.div(numTwo)); break;
    case '%': (!numTwo) ? (total = numOne.times(0.01)) : (total = (numOne.times(numTwo)).times(0.01)); break;
    default: total = '0';
  }
  
  return total.toString();
};

export default operate;
