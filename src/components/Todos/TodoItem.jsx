import styled from "styled-components";

const TodoItemStyled = styled.div`
  background-color: lightseagreen;
  padding: 10px 0 10px 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
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
`;

function TodoItem({ todo, index, deleteTodo }) {
  return (
    <TodoItemStyled onDoubleClick={() => deleteTodo(index)}>
      <img src="/todo.svg" alt="" className="todo_icon" />
      <h3>{todo}</h3>
    </TodoItemStyled>
  );
}

export default TodoItem;
