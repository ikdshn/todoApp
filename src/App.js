import React, { useState } from "react";
import Title from "./Title";
import From from "./Form";
import List from "./List";
import shortid from "shortid";

const App = () => {
  const name = "shun";

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        content: text,
        id: shortid.generate(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Title name={name} />
      <From addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
