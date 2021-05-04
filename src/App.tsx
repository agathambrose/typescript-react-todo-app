import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "Do the laundry", done: true },
  { text: "Take out the trash", done: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todoToggler: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const AddTodos: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, done: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todo={todos} todoToggler={todoToggler} />
      <AddTodoForm addTodos={AddTodos} />
    </React.Fragment>
  );
};

export default App;
