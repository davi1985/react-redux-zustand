import { useAppSelector } from "../store";

export const TodoList = () => {
  const store = useAppSelector((store) => store.todo);

  return (
    <ul>
      {store.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
