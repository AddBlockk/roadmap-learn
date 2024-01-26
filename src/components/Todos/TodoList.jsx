import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
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
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </>
  );
}

export default TodoList;
