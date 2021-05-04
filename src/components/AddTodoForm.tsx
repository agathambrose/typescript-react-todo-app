import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
  addTodos: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

      addTodos(newTodo);
      setNewTodo("")
  };

  return (
    <form>
          <input type="text" onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
