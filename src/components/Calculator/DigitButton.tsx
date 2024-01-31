import React from "react";
import { ACTIONS } from "../../pages/Calculator";

interface DigitButtonProps {
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  digit: string;
}

const DigitButton: React.FC<DigitButtonProps> = ({ dispatch, digit }) => {
  const handleDigitClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } });
  };

  return <button onClick={handleDigitClick}>{digit}</button>;
};

export default DigitButton;
