import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  text: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  toggleDone: (index: number) => void;
  selectedTodos: number[];
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleDone,
  selectedTodos,
}) => {
  return (
    <>
      {!todos.length ? (
        <h2>Todo нету</h2>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.text}
            index={index}
            done={todo.done}
            deleteTodo={deleteTodo}
            toggleDone={toggleDone}
          />
        ))
      )}
    </>
  );
};

export default TodoList;
