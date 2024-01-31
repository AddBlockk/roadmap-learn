import React from "react";
import styled from "styled-components";
import deleteTodoButton from "../../assets/icons/deleteTodo.svg";
import cross from "../../assets/icons/cross.svg";
import checkbox from "../../assets/icons/checkbox.svg";
import todoIcon from "../../assets/icons/todoIcon.svg";

const TodoItemBody = styled.div<{ done: boolean }>`
  background-color: ${(props) => (props.done ? "#d3d3d3" : "lightseagreen")};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  user-select: none;
  h3 {
    color: ${(props) => (props.done ? "black" : "white")};
    white-space: pre-wrap;
  }
  .todo_icon {
    width: 30px;
    fill: ${(props) => (props.done ? "black" : "white")};
  }
  .left__todo__item {
    display: flex;
    column-gap: 10px;
  }
  .right__todo__item {
    display: flex;
    column-gap: 10px;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
  }
  .cross {
    width: 30px;
    cursor: pointer;
  }
  .checkbox {
    width: 30px;
    cursor: pointer;
  }
  .delete__todo {
    width: 40px;
  }
`;

interface TodoItemProps {
  todo: string;
  index: number;
  done: boolean;
  deleteTodo: (index: number) => void;
  toggleDone: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  done,
  deleteTodo,
  toggleDone,
}) => {
  return (
    <TodoItemBody done={done}>
      <div className="left__todo__item">
        <img src={todoIcon} alt="" className="todo_icon" />
        <h3>{todo}</h3>
      </div>
      <div className="right__todo__item">
        <button onClick={() => toggleDone(index)}>
          {done ? (
            <img
              src={cross}
              alt="cross"
              className="cross"
              title="отменить выполнение todo"
            />
          ) : (
            <img
              src={checkbox}
              alt="checkbox"
              className="checkbox"
              title="выполнить todo"
            />
          )}
        </button>
        <img
          src={deleteTodoButton}
          title="удалить todo"
          alt="удалить"
          className="delete__todo"
          onClick={() => deleteTodo(index)}
        />
      </div>
    </TodoItemBody>
  );
};

export default TodoItem;
