import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name}) => {
  const handleClick = () => {
    clickHandler(name);
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