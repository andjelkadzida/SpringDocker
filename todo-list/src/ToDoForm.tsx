import React, { ChangeEvent, FormEvent, useState } from "react";

interface ToDoFormProps {
  addTodo: AddTodo;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <input type="submit" value="Add to list" onClick={handleSubmit} />
    </form>
  );
};
