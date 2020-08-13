import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="button-panel">
      <div className="row group-01">
        <Button name="AC" color="grayLight" />
        <Button name="+/-" color="grayLight" />
        <Button name="%" color="grayLight" />
        <Button name="÷" />
      </div>
      <div className="row group-02">
        <Button name="7" color="grayLight" />
        <Button name="8" color="grayLight" />
        <Button name="9" color="grayLight" />
        <Button name="X" />
      </div>
      <div className="row group-03">
        <Button name="4" color="grayLight" />
        <Button name="5" color="grayLight" />
        <Button name="6" color="grayLight" />
        <Button name="-" />
      </div>
      <div className="row group-04">
        <Button name="1" color="grayLight" />
        <Button name="2" color="grayLight" />
        <Button name="3" color="grayLight" />
        <Button name="+" />
      </div>
      <div className="row group-05">
        <Button name="0" wide color="grayLight" />
        <Button name="." color="grayLight" />
        <Button name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  /* clickHandler: PropTypes.func.isRequired, */
};

export default ButtonPanel;