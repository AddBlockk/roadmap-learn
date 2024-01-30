import React from "react";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";
import styled from "styled-components";
import deleteTodoButton from "../../assets/icons/deleteToto.svg";

const TodoContainer = styled.div`
  margin-top: 20px;

  h1 {
    margin-bottom: 20px;
  }

  .delete__todo {
    width: 40px;
    cursor: pointer;
  }
`;

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  interface Todo {
    text: string;
  }

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos") as string);
    if (saveTodos) {
      setTodos(saveTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodoHandler = (text: string) => {
    const newTodo: Todo = {
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (index: number) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodosHandler = () => {
    setTodos([]);
    localStorage.setItem("todos", JSON.stringify([]));
  };

  return (
    <TodoContainer>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <img
        src={deleteTodoButton as any}
        alt="удалить"
        className="delete__todo"
        onClick={deleteTodosHandler}
      />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </TodoContainer>
  );
}

export default Todo;
