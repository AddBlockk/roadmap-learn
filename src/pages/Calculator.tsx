import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import DigitButton from "../components/Calculator/DigitButton.tsx";
import OperationButton from "../components/Calculator/OperationButton.tsx";

const CalcBody = styled.div`
  .counts {
    display: flex;
    column-gap: 20px;
  }
  .calculator__grid {
    background-color: #101e1e;
    max-width: max-content;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    display: grid;
    margin-top: 2rem;
    gap: 10px;
    justify-content: center;
    grid-template-columns: repeat(4, 6rem);
    grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
    button {
      cursor: pointer;
      font-size: 2.5rem;
      border: 1px solid white;
      outline: none;
      background-color: #0f2727;
      border-radius: 100%;
      color: #beeaf3;
      border: none;
      transition: 200ms ease-in-out;
    }

    .operations {
      background-color: #214d56;
    }
    .equally {
      background-color: #004f50;
      color: #17eef0;
    }
    .delete {
      background-color: #064c66;
      border-radius: 50px;
    }
    .delete:hover {
      border-radius: 20px;
    }
    .delete__last__simbol {
      width: 40px;
    }
    .SVGRepo_iconCarrier {
      stroke: #beeaf3;
    }
    .span-two {
      grid-column: span 2;
    }
    .output {
      grid-column: 1/-1;
      background-color: #0e3837;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      color: #d7e7e4;
      padding: 0.75rem;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: 2rem;
    }
  }
`;

interface State {
  currentOperand?: string | null;
  previousOperand?: string | null;
  operation?: string | null;
  overwrite?: boolean;
}

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(
  state: State,
  { type, payload }: { type: string; payload?: any }
) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          currentOperand: payload.digit,
        };
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    default:
      return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }: State) {
  const prev = parseFloat(previousOperand!);
  const current = parseFloat(currentOperand!);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = (prev + current).toString();
      break;
    case "-":
      computation = (prev - current).toString();
      break;
    case "×":
      computation = (prev * current).toString();
      break;
    case "%":
      computation = (prev % current).toString();
      break;
    case "÷":
      computation = (prev / current).toString();
      break;
    default:
      return "";
  }

  return computation;
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand: string | null | undefined) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(Number(integer));
  return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
}

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <CalcBody>
      <div className="calculator__grid">
        <div className="output">
          <div className="previous__operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current__operand">
            {formatOperand(currentOperand)}
          </div>
        </div>
        <button
          className="span-two delete"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
          AC
        </button>
        <OperationButton
          operation="%"
          dispatch={dispatch}
          className="operations"
        />
        <OperationButton
          operation="÷"
          dispatch={dispatch}
          className="operations"
        />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton
          operation="×"
          dispatch={dispatch}
          className="operations"
        />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton
          operation="-"
          dispatch={dispatch}
          className="operations"
        />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton
          operation="+"
          dispatch={dispatch}
          className="operations"
        />
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          <svg
            className="delete__last__simbol"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M16 9L13.0001 11.9999M13.0001 11.9999L10 15M13.0001 11.9999L10.0002 9M13.0001 11.9999L16.0002 15M8 6H19C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18H8L2 12L8 6Z"
                stroke="#beeaf3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="SVGRepo_iconCarrier"
              />
            </g>
          </svg>
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          className="equally">
          =
        </button>
      </div>
    </CalcBody>
  );
}
