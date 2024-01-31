import React from "react";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";
import deleteTodoButton from "../../assets/icons/deleteTodo.svg";
import resetTodoButton from "../../assets/icons/resetTodo.svg";

const TodoContainer = styled.div`
  margin-top: 20px;
  h1 {
    margin-bottom: 20px;
  }
  .todo__main--button {
    width: 70px;
  }
  .delete__todo {
    cursor: pointer;
  }
  .done__todo {
    cursor: pointer;
  }
  .body__main--button {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodos, setSelectedTodos] = useState<number[]>([]);

  interface Todo {
    text: string;
    done: boolean;
  }

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem("todos") as string);
    if (saveTodos) {
      setTodos(saveTodos);
    }
    const saveSelectedTodos = JSON.parse(
      localStorage.getItem("selectedTodos") as string
    );
    if (saveSelectedTodos) {
      setSelectedTodos(saveSelectedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    if (selectedTodos.length > 0) {
      localStorage.setItem("selectedTodos", JSON.stringify(selectedTodos));
    }
  }, [todos, selectedTodos]);

  const addTodoHandler = (text: string) => {
    const newTodo: Todo = {
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (index: number) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodosHandler = () => {
    const newTodos = todos.filter((_, idx) => !selectedTodos.includes(idx));
    setTodos(newTodos);
    setSelectedTodos([]);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const resetTodosHandler = () => {
    const newTodos: Todo[] = [];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
    setSelectedTodos([]);
  };

  const toggleDoneHandler = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);

    const updatedSelectedTodos = selectedTodos.includes(index)
      ? selectedTodos.filter((todoIndex) => todoIndex !== index)
      : [...selectedTodos, index];
    setSelectedTodos(updatedSelectedTodos);
  };

  return (
    <TodoContainer>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <div className="body__main--button">
        <img
          src={resetTodoButton as any}
          alt="удалить"
          className="delete__todo todo__main--button"
          onClick={deleteTodosHandler}
          title="удалить все выполненные todo"
        />
        <img
          src={deleteTodoButton as any}
          alt="выполненные"
          className="done__todo todo__main--button"
          onClick={resetTodosHandler}
          title="удалить все todo"
        />
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleDone={toggleDoneHandler}
        selectedTodos={selectedTodos}
      />
    </TodoContainer>
  );
}

export default Todo;
