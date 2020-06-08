import * as React from "react";
import "./styles.css";

type clickElement = React.MouseEvent;
interface Todo {
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  const addTodo = (value: string): void => {
    const newTodos: Todo[] = [
      ...todoList,
      {
        title: value,
        completed: false
      }
    ];
    setTodoList(newTodos);
  };

  const handleSubmit = (e: clickElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const completeTodo = (index: number): void => {
    let tempTodos: Todo[] = [...todoList];
    tempTodos[index].completed = !tempTodos[index].completed;
    setTodoList(tempTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form>
        <input
          type="text"
          required
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add todo
        </button>
      </form>
      <section>
        {todoList.map((item: Todo, index: number) => (
          <div
            key={index}
            style={{ textDecoration: item.completed ? "line-through" : "" }}
            onClick={() => completeTodo(index)}>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}
