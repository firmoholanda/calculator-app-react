import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  return (
    <div className="button-panel">
      <div className="row group-one">
        <Button name="AC" color="grayLight" clickHandler={handleClick} />
        <Button name="+/-" color="grayLight" clickHandler={handleClick} />
        <Button name="%" color="grayLight" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="row group-two">
        <Button name="7" color="grayLight" clickHandler={handleClick} />
        <Button name="8" color="grayLight" clickHandler={handleClick} />
        <Button name="9" color="grayLight" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="row group-three">
        <Button name="4" color="grayLight" clickHandler={handleClick} />
        <Button name="5" color="grayLight" clickHandler={handleClick} />
        <Button name="6" color="grayLight" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="row group-four">
        <Button name="1" color="grayLight" clickHandler={handleClick} />
        <Button name="2" color="grayLight" clickHandler={handleClick} />
        <Button name="3" color="grayLight" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="row group-five">
        <Button name="0" wide color="grayLight" clickHandler={handleClick} />
        <Button name="." color="grayLight" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
