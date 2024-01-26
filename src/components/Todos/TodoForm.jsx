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
    color: black;
    border-radius: 5px 0 0 5px;
    border: 2px solid lightseagreen;
  }
  input:focus {
    outline: none;
  }
  button {
    padding: 0 30px;
    background-color: lightseagreen;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0 5px 5px 0;
  }
`;

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim().length > 0) {
      addTodo(text);
    }
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
