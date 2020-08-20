import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) next = `${next * -1}`;
      else if (total) total = `${total * -1}`;

      break;
    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (!total) break;
      if (next && operation) {
        total = operate(total, next, operation);
        next = null;
      }
      operation = buttonName;
      break;
    case '.':
      if (total && !total.split('').includes('.') && !operation) total = `${total}.`;
      else if (next && !next.split('').includes('.')) next = `${next}.`;
      else next = '0.';
      break;
    case '=':
      if (total && operation === '%') {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    default:
      if (operation) {
        next = next === null ? buttonName : next + buttonName;
      } else {
        total = total === null ? buttonName : total + buttonName;
      }
  }

  return { total, next, operation };
};

export default calculate;