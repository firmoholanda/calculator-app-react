import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const handleClick = () => {
    clickHandler(name);
  };
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  
  return (
    <button type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;