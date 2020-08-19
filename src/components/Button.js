import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide,
}) => {
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };

  return (
    <button type="button" style={style}>
      {name}
    </button>
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
};

export default Button;
