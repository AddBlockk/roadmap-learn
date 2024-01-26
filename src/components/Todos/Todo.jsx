import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";

const TodoContainer = styled.div`
  margin-top: 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos"));
    if (saveTodos) {
      setTodos(saveTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      //   isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <TodoContainer>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </TodoContainer>
  );
}

export default Todo;
