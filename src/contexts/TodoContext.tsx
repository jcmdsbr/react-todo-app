import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { get, save } from "../services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  add: () => {},
  remove: () => {},
  toggle: () => {},
});

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  useEffect(() => {
    save(todos);
  }, [todos]);

  const add = (title: string) => {
    const todo = new Todo(todos.length + 1, title, false);
    setTodos([...todos, todo]);
  };

  const remove = (todo: Todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.splice(1, index));
  };

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, add, remove, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
