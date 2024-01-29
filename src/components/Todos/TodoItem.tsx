import React from "react";
import styled from "styled-components";
import deleteTodoButton from "../../img/icons/deleteToto.svg";

const TodoItemBody = styled.div`
  background-color: lightseagreen;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  user-select: none;
  h3 {
    color: white;
    white-space: pre-wrap;
  }
  .todo_icon {
    width: 30px;
    fill: white;
  }
  .left__todo__item {
    display: flex;
    column-gap: 10px;
  }
  .right__todo__item {
    display: flex;
    column-gap: 10px;
  }
`;

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <TodoItemBody>
      <div className="left__todo__item">
        <img src="/todo.svg" alt="" className="todo_icon" />
        <h3>{todo}</h3>
      </div>
      <div className="right__todo__item">
        <button>Удалить</button>
        <img
          src={deleteTodoButton}
          alt="удалить"
          className="delete__todo"
          onClick={() => deleteTodo(index)}
        />
      </div>
    </TodoItemBody>
  );
}

export default TodoItem;
