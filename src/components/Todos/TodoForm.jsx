import { useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  form {
    width: 100%;
    display: flex;
  }
  input {
    width: 100%;
    padding: 10px 4px;
  }
  input:focus {
    outline: none;
  }
`;

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <TodoContainer>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите новое задание"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Нажать</button>
      </form>
    </TodoContainer>
  );
}

export default TodoForm;
