import styled from "styled-components";
import { ACTIONS } from "../pages/Calculator";

// const OperationButtonClasses = styled.button`
//   .operations {
//     background-color: #214d56;
//   }
// `;

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="operations"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }>
      {operation}
    </button>
  );
}
