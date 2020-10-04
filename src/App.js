import React, { useState } from "react";
import From from "./Form";
import List from "./List";
import shortid from "shortid";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(content) {
    if (content.trim() !== "") {
      setTodos([
        ...todos,
        {
          content,
          id: shortid.generate(),
        },
      ]);
    } else {
      alert("入力してください");
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const name = "shun";

  return (
    <>
      <h1>Todo App!</h1>
      <h2 className="title">ようこそ{name}さん</h2>
      <From addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
