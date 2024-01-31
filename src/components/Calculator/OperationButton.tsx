import React from "react";
import { ACTIONS } from "../../pages/Calculator";

interface OperationButtonProps {
  dispatch: React.Dispatch<{ type: string; payload: { operation: string } }>;
  operation: string;
  className: string;
}

const OperationButton: React.FC<OperationButtonProps> = ({
  dispatch,
  operation,
}) => {
  const handleOperationClick = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation: operation },
    });
  };

  return (
    <button className="operations" onClick={handleOperationClick}>
      {operation}
    </button>
  );
};

export default OperationButton;
