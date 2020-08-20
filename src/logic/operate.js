import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  let numTwo;
  if (!numberTwo) {
    numTwo = numberTwo;
  } else {
    numTwo = Big(numberTwo);
  }

  let total;

  if (operation === '+') {
    total = numOne.plus(numTwo);
  } else if (operation === '-') {
    total = numOne.minus(numTwo);
  } else if (operation === '×') {
    total = numOne.times(numTwo);
  } else if (operation === '÷') {
    if (numTwo.eq(0)) {
      total = '0';
    } else {
      total = numOne.div(numTwo);
    }
  } else if (operation === '%') {
    if (!numTwo) {
      total = numOne.times(0.01);
    } else {
      total = (numOne.times(numTwo)).times(0.01);
    }
  } else {
    total = '0';
  }

  return total.toString();
};

export default operate;
