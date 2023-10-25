import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleNewTodo = (ev: FormEvent) => {
    ev.preventDefault();

    dispatch(add({ newTodo }));

    setNewTodo("");
  };

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="New TODO"
        value={newTodo}
        onChange={(ev) => setNewTodo(ev.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
