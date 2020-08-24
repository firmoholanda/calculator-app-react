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
    <button type="button" style={style} onClick={handleClick}> {name} </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
