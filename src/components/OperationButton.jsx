import { ACTIONS } from "../pages/Calculator";

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
